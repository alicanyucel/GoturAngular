import { Injectable } from '@angular/core';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { isNavigationPermitted } from 'app/core/navigation/navigation.utils';
import { UserService } from 'app/core/user/user.service';
import { cloneDeep } from 'lodash';
import { firstValueFrom } from 'rxjs';
import { adminNavigation } from './navigation.data';

@Injectable({
	providedIn: 'root'
})
export class AdminNavigationService {

	/** */
	constructor(
		private _userService: UserService,
		private _navigationService: NavigationService
	) { }

	/** */
	async populate(): Promise<void> {
		const permissions = await firstValueFrom(this._userService.permissions$);

		const navigations = adminNavigation.filter(navigation => {
			return isNavigationPermitted(navigation, permissions);
		});

		this._navigationService.populate({
			compact: cloneDeep(navigations),
			default: cloneDeep(navigations),
			futuristic: cloneDeep(navigations),
			horizontal: cloneDeep(navigations)
		});
	}
}
