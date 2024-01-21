import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CarrierApplicationService {
	filterText!:ICreateCarrierRegistryRequestCommand [];
	constructor(
		private _httpClient: HttpClient
	) { }
	async postCarrierApplication(model:ICreateCarrierRegistryRequestCommand): Promise<void>
	 {
		await firstValueFrom(this._httpClient.post(`${environment.apiUrl}/api/Registry/CarrierRegistryRequest`, 
			model
		));
	}
}
export interface ICreateCarrierRegistryRequestCommand 
{
	name: string
	phone: string;
	email: string;
	surname: string;
	nationalIdentityNumber:string;
	districtId: number;
}
