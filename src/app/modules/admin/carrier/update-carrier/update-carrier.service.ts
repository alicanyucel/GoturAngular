import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBaseEntity } from 'app/shared/models/base-entity.model';
import { environment } from 'environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CarrierUpdateService {
	constructor(
		private _httpClient: HttpClient
	) { }
	async putCarrierApplication(model:IUpdateCarrierRegistryRequestCommand): Promise<void>
	 {
		await firstValueFrom(this._httpClient.put(`${environment.apiUrl}/api/Registry/CarrierUpdateRequest`, 
			model
		));
	}
}
export interface IUpdateCarrierRegistryRequestCommand  extends IBaseEntity<string>
{
	name: string;
	phone: string;
	email: string;
	surname: string;
	nationalIdentityNumber:string;
	districtId: number;
}
