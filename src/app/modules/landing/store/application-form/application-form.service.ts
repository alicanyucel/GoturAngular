import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class StoreApplicationService {
	filterText!:ICreateStoreRegistryRequestCommand [];
	constructor(
		private _httpClient: HttpClient
	) { }
	async postStoreApplication(model:ICreateStoreRegistryRequestCommand): Promise<void>
	 {
		await firstValueFrom(this._httpClient.post(`${environment.apiUrl}/api/Registry/StoreRegistryRequest`, 
			model
		));
	}
}

export interface ICreateStoreRegistryRequestCommand 
{
	storeName:string;
	name: string
	phone: string;
	email: string;
	surname: string;
	nationalIdentityNumber:string;
	districtId: number;
}
