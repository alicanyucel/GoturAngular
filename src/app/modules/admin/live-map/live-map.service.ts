import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class LiveMapService {
	//
	constructor(private _httpClient: HttpClient) { }

	//
	public async getCarrierLocations(mode: 'silent' | 'with-loading-bar' = 'with-loading-bar'): Promise<Array<CarrierLocationDto>> {
		const res = await firstValueFrom(this._httpClient.get<{ data: Array<CarrierLocationDto> }>(`${environment.apiUrl}/api/Location/CarrierLocations`, mode === 'silent' ? {
			headers: {
				"fuse-request-silent": "true"
			}
		} : undefined));
		return res.data;
	}

	//
	public async getStoreLocations(): Promise<Array<StoreLocationDto>> {
		const res = await firstValueFrom(this._httpClient.get<{ data: Array<StoreLocationDto> }>(`${environment.apiUrl}/api/Location/StoreLocations`));
		return res.data;
	}
}

export type CarrierLocationDto = {
	carrierId: string,
	latitude: number,
	longitude: number,
	dateTime: Date
}

export type StoreLocationDto = {
	storeId: string,
	latitude: number,
	longitude: number,
}
