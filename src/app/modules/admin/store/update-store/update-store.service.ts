import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBaseEntity } from 'app/shared/models/base-entity.model';
import { environment } from 'environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class StoreUpdateService {
	constructor(
		private _httpClient: HttpClient
	) { }
	async putStoreApplication(model:IUpdateStoreRegistryRequestCommand): Promise<void>
	 {
		await firstValueFrom(this._httpClient.put(`${environment.apiUrl}/api/Registry/StoreUpdateRequest`, 
			model
		));
	}
}
export interface IUpdateStoreRegistryRequestCommand extends IBaseEntity<string>
{
	storeName:string;
	name: string;
	phone: string;
	address:string;
	email: string;
	surname: string;
	nationalIdentityNumber:string;
	districtId: number;
}
