import { Injectable } from '@angular/core';
import { CanMatch, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { firstValueFrom, Observable, of, switchMap } from 'rxjs';
import { AuthService } from 'app/core/auth/auth.service';
import { UserService } from 'app/core/user/user.service';
import { NavigationService } from 'app/core/navigation/navigation.service';

@Injectable({
    providedIn: 'root'
})
export class NavigationGuard implements CanMatch {
    /**
     * Constructor
     */
    constructor(
        private _userService: UserService,
        private _navigationService: NavigationService
    ) { }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Can match
     *
     * @param route
     * @param segments
     */
    canMatch(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this._check(route);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Check the authenticated status
     *
     * @param segments
     * @private
     */
    private async _check(route: Route): Promise<boolean | UrlTree> {

        const claim = route.data?.claim;
        if (!claim) { return true; }

        const permissions = await firstValueFrom(this._userService.permissions$);
        return permissions.includes(claim);
    }
}
