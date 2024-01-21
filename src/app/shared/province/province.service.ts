import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProvinceService {
	constructor(
		private _httpClient: HttpClient,
	) { }
	async getList(): Promise<Array<IProvinceDto>> {
		const response = await firstValueFrom(this._httpClient.get<IGetProvincesQueryResponse>(`${environment.apiUrl}/api/Locality/Provinces`));
		return response.data;
	}
}
export interface IGetProvincesQueryResponse {
	data: Array<IProvinceDto>;
}
export interface IProvinceDto {
	id: number;
	name: string;
}
