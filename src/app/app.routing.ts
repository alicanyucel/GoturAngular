import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { NavigationGuard } from './core/auth/guards/navigation.guard';
import { AdminDataResolver } from './modules/admin/core/admin.resolvers';
import { AdminGuard } from './modules/admin/core/auth/admin.guard';
import { AdminNavigationClaims } from './modules/admin/core/navigation/navigation.claims';
import { StoreGuard } from './modules/store/core/auth/store.guard';
import { StoreDataResolver } from './modules/store/core/store.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: '' },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: '', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule) },
            { path: 'carrier-application', loadChildren: () => import('app/modules/landing/carrier/application-form/application-form.module').then(m => m.ApplicationFormModule) },
            { path: 'store-application', loadChildren: () => import('app/modules/landing/store/application-form/application-form.module').then(m => m.ApplicationFormModule) }
        ]
    },

    // Auth routes for guests
    {
        path: '',
        canMatch: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule) },
            { path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule) },
            { path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule) },
            { path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule) },
            { path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule) }
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canMatch: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule) },
            { path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule) }
        ]
    },

    // Admin routes
    {
        path: 'admin',
        canMatch: [AuthGuard, AdminGuard],
        component: LayoutComponent,
        resolve: {
            initialData: AdminDataResolver,
        },
        children: [
            { path: '', loadChildren: () => import('app/modules/admin/home/home.module').then(m => m.HomeModule) },
            { path: 'live-map', data: { claim: AdminNavigationClaims.LiveMapNavigationPermission }, canMatch: [NavigationGuard], loadChildren: () => import('app/modules/admin/live-map/live-map.module').then(m => m.LiveMapModule) },
            // STORE
            { path: 'store/list', canMatch: [NavigationGuard], loadChildren: () => import('app/modules/admin/store/store-list/store-list.module').then(m => m.StoreListModule) },
            { path: 'store/details/:id', canMatch: [NavigationGuard], loadChildren: () => import('app/modules/admin/store/store-details/store-details.module').then(m => m.StoreDetailsModule) },
            { path: 'store/registry/list', data: { claim: AdminNavigationClaims.StoreRegistryRequestNavigationPermission }, canMatch: [NavigationGuard], loadChildren: () => import('app/modules/admin/store/registry-list/registry-list.module').then(m => m.RegistryListModule) },
            { path: 'store/registry/details/:id', data: { claim: AdminNavigationClaims.StoreRegistryRequestNavigationPermission }, canMatch: [NavigationGuard], loadChildren: () => import('app/modules/admin/store/update-store/update-store.module').then(m =>m.UpdateStoreModule) },
            // Leaflet Map
            { path: 'leaflet/map', canMatch: [NavigationGuard], loadChildren: () => import('app/shared/leaflet-map/leaflet-map.module').then(m => m.LeafletMapModule) },
            // CARRIER

            { path: 'carrier/list', canMatch: [NavigationGuard], loadChildren: () => import('app/modules/store/test/test.module').then(m => m.TestModule) },
            { path: 'carrier/details/:id', canMatch: [NavigationGuard], loadChildren: () => import('app/modules/store/test/test.module').then(m => m.TestModule) },
            { path: 'carrier/registry/list', data: { claim: AdminNavigationClaims.CarrierRegistryRequestNavigationPermission }, canMatch: [NavigationGuard], loadChildren: () => import('app/modules/admin/carrier/registry-list/registry-list.module').then(m => m.RegistryListModule) },
            { path: 'carrier/registry/details/:id', data: { claim: AdminNavigationClaims.CarrierRegistryRequestNavigationPermission }, canMatch: [NavigationGuard], loadChildren: () => import('app/modules/admin/carrier/update-carrier/update-carrier.module').then(m =>m.UpdateCarrierModule) },
        ]
    },
    
    // Store routes
    {
        path: 'store',
        canMatch: [AuthGuard, StoreGuard],
        component: LayoutComponent,
        resolve: {
            initialData: StoreDataResolver,
        },
        data: {
            layout: 'material'
        },
        children: [
            { path: '', loadChildren: () => import('app/modules/store/home/home.module').then(m => m.HomeModule) },
            { path: 'test', loadChildren: () => import('app/modules/store/test/test.module').then(m => m.TestModule) },
        ]
    },

    { path: '**', pathMatch: 'full', redirectTo: '' }
];
