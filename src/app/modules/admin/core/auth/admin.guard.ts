import { Injectable } from '@angular/core';
import { CanMatch, Route, UrlSegment, UrlTree } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { UserService } from 'app/core/user/user.service';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanMatch {
    /**
     * Constructor
     */
    constructor(
        private _userService: UserService,
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
        return this._check();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Check the authenticated status
     *
     * @private
     */
    private async _check(): Promise<boolean | UrlTree> {
        const roles = await firstValueFrom(this._userService.roles$)
        return roles.includes('Admin');
    }
}
