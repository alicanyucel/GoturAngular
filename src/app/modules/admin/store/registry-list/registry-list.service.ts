import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ERegisteryRequestStatus } from 'app/shared/enums';
import { toQueryParamObject } from 'app/shared/heplers';
import { IBaseEntity } from 'app/shared/models/base-entity.model';
import { IDistrict } from 'app/shared/models/district.model';
import { IPaginateRequest } from 'app/shared/models/paginate-request.model';
import { IPaginateResponse } from 'app/shared/models/paginate-response.model';
import { environment } from 'environments/environment';
import { firstValueFrom } from 'rxjs';
@Injectable()
export class RegistryListService {
	constructor(
		private _httpClient: HttpClient
	) { }
	async getRegistryRequestList(query: IGetRegistryRequestListQuery): Promise<IGetRegistryRequestListQueryResponse> {
		return await firstValueFrom(this._httpClient.get<IGetRegistryRequestListQueryResponse>(`${environment.apiUrl}/api/Registry/StoreRegistryRequests`, {
			params: toQueryParamObject(query)
		}))
	}
}

export interface IGetRegistryRequestListQuery extends IPaginateRequest {
	status?: ERegisteryRequestStatus;
	dateRangeStart?: Date;
	searchText?: string;
	dateRangeEnd?: Date;

}

export interface IGetRegistryRequestListQueryResponse extends IPaginateResponse {
	data: Array<IStoreRegistryRequest>;
}

export interface IStoreRegistryRequest extends IBaseEntity<string> {

	storeName: string
	name: string;
	surname: string;
	nationalIdentityNumber: string;
	phone: string;
	email: string;
	status: ERegisteryRequestStatus;

	districtId: string;
	district: IDistrict;

}
