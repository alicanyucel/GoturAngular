import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarrierUpdateService, IUpdateCarrierRegistryRequestCommand } from './update-carrier.service';
import { DistrictService, IDistrictDto } from 'app/shared/district/district.service';
import { IProvinceDto, ProvinceService } from 'app/shared/province/province.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileUploadService } from 'app/shared/file-upload/file-upload.service';

@Component(
	{
		selector: 'update-carrier-form',
		templateUrl: './update-carrier.component.html',
		styleUrls: ['./update-carrier.component.scss'],
	})
export class UpdateCarrierComponent implements OnInit {
	@ViewChild('matDrawer', { static: true }) matDrawer: MatDrawer;
	drawerMode: 'side' | 'over';
	selectedItem: Item;
	public currentFile?: File;
	public progress = 0;
	public message = ''
	public fileName = 'Dosya Seç';
	public fileInfos?: Observable<any>;
	public error: Error | null = null
	private _unsubscribeAll: Subject<any> = new Subject<any>();
	public items: Items;
	public item: Item;
	public updateModel: IUpdateCarrierRegistryRequestCommand;
	onBackdropClicked(): void {
		// Go back to the list
		this._router.navigate(['./'], { relativeTo: this._activatedRoute });

		// Mark for check
		this._changeDetectorRef.markForCheck();
	}
	selectFile(event: any): void {
		if (event.target.files && event.target.files[0]) {
			const file: File = event.target.files[0];
			this.currentFile = file;
			this.fileName = this.currentFile.name;
		} else {
			this.fileName = 'Dosya Seç';
		}
	}
	upload(): void {
		this.progress = 0;
		this.message = "";
		if (this.currentFile) {
			this._fileUploadService.upload(this.currentFile).subscribe(
				(event: any) => {
					if (event.type === HttpEventType.UploadProgress) {
						this.progress = Math.round(100 * event.loaded / event.total);
					} else if (event instanceof HttpResponse) {
						this.message = event.body.message;
						this.fileInfos = this._fileUploadService.getFiles();
					}
				},
				(err: any) => {
					console.log(err);
					this.progress = 0;
					if (err.error && err.error.message) {
						this.message = err.error.message;
					} else {
						this.message = 'Dosya Yüklenemedi';
					}
					this.currentFile = undefined;
				});
		}
	}
	public updateForm = new FormGroup(
		{
			name: new FormControl('', Validators.compose([
				Validators.required
			])),
			surname: new FormControl('', Validators.compose([
				Validators.required
			])),
			phone: new FormControl('', Validators.compose([Validators.minLength(11), Validators.maxLength(11)])),
			nationalIdentityNumber: new FormControl('', Validators.compose([Validators.minLength(11), Validators.maxLength(11)])),
			email: new FormControl("", Validators.compose([
				Validators.required,
				Validators.pattern("[^ @]*@[^ @]*")
			])),
			districtId: new FormControl('', Validators.compose([Validators.required])),
		});
	public districts: IDistrictDto[] = [];
	public provinces: IProvinceDto[] = [];
	constructor(
		private _snackBar: MatSnackBar,
		private _service: CarrierUpdateService,
		private _districtService: DistrictService,
		private _activatedRoute: ActivatedRoute,
		private _changeDetectorRef: ChangeDetectorRef,
		private _router: Router,
		private _fileUploadService:FileUploadService,
		private _provinceService: ProvinceService,
	) { }
	async onSubmit(): Promise<void> {
		if (this.updateForm.invalid) {
			return;
		}
		try {
			await this._service.putCarrierApplication(<IUpdateCarrierRegistryRequestCommand><unknown>this.updateForm.value)
			this._snackBar.open('kayıt güncellendi.', 'Ok',
				{
					duration: 4000
				}
			);
		}
		catch (error) {
			this._snackBar.open('kayıt güncellenemedi.', 'Cancel',
				{
					duration: 4000
				}
			);
		}
	}
	async onProvinceSelected(provinceId: number): Promise<void> {
		this.updateForm.get('districtId')?.setValue(undefined);
		this.districts = await this._districtService.getList({ provinceId });
	}
	async ngOnInit(): Promise<void> {
		this.provinces = await this._provinceService.getList();
        this.fileInfos = this._fileUploadService.getFiles();
	}

}
export interface Items {
	folders: Item[];
	files: Item[];
	path: any[];
}

export interface Item {
	id?: string;
	folderId?: string;
	name?: string;
	createdBy?: string;
	createdAt?: string;
	modifiedAt?: string;
	size?: string;
	type?: string;
	contents?: string | null;
	description?: string | null;
}
