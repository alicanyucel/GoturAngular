import { Pipe, PipeTransform } from '@angular/core';
import { ERegisteryRequestStatus } from '../enums';

@Pipe({ name: 'registryStatus' })
export class RegistryStatusPipe implements PipeTransform {
	transform(value: ERegisteryRequestStatus | number): string {
		switch (value as ERegisteryRequestStatus) {
			case ERegisteryRequestStatus.Approved:
				return 'Onaylandı';
			case ERegisteryRequestStatus.Rejected:
				return 'Reddedildi';
			case ERegisteryRequestStatus.Pending:
				return 'Beklemede';
			default:
				return 'NA';
		}
	}
}