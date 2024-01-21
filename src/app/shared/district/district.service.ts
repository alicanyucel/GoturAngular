import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { firstValueFrom } from 'rxjs';
import { toQueryParamObject } from '../heplers';

@Injectable({
	providedIn: 'root'
})
export class DistrictService {
	constructor(
		private _httpClient: HttpClient,
	) { }
	async getList(query: IGetDistrictsQuery): Promise<Array<IDistrictDto>> {
		const response=await firstValueFrom(this._httpClient.get<IGetDistrictsQueryResponse>(`${environment.apiUrl}/api/Locality/Districts`, {
			params: toQueryParamObject(query)
		}));
		return response.data;
	}
}
export interface IGetDistrictsQuery {
	provinceId: number;
}
export interface IGetDistrictsQueryResponse {
	data: Array<IDistrictDto>;
}
export interface IDistrictDto {
	id: number;
	name: string;
}
