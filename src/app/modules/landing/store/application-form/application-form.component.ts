import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StoreApplicationService, ICreateStoreRegistryRequestCommand } from './application-form.service';
import { DistrictService, IDistrictDto } from 'app/shared/district/district.service';
import { IProvinceDto, ProvinceService } from 'app/shared/province/province.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component(
	{
		selector: 'app-store-application-form',
		templateUrl: './application-form.component.html',
		styleUrls: ['./application-form.component.scss'],
	})
export class ApplicationFormComponent implements OnInit 
{
	public error: Error | null = null
	public applicationForm = new FormGroup(
		{
			storeName: new FormControl('', Validators.compose([
				Validators.required
			])),
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
		private _service: StoreApplicationService,
		private _districtService: DistrictService,
		private _provinceService: ProvinceService,
	) { }
	async onSubmit(): Promise<void> 
	{
		if (this.applicationForm.invalid) 
		{
			return;
		}
		try 
		{
			await this._service.postStoreApplication(<ICreateStoreRegistryRequestCommand><unknown>this.applicationForm.value)
				this._snackBar.open('kayıt eklendi.', 'Ok',
					{
						duration: 4000
					}
				);
				
			}
		catch (error) 
		{
			this._snackBar.open('kayıt eklenemedi', 'Cancel',
					{
						duration: 4000
					}
				);
			}
		}
	async onProvinceSelected(provinceId: number): Promise<void> 
	{
		this.applicationForm.get('districtId')?.setValue(undefined);
		this.districts = await this._districtService.getList({ provinceId });
	}
	async ngOnInit(): Promise<void> 
	{
		this.provinces = await this._provinceService.getList();
	}
}