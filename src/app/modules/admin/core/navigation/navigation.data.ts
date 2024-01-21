/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { AdminNavigationClaims } from './navigation.claims';

export const adminNavigation: FuseNavigationItem[] = [
    {
        title: 'Anasayfa',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/admin',
        externalLink: true,
        disabled: false
    },
    {
        title: 'Canlı Harita',
        type: 'basic',
        link: '/admin/live-map',
        icon: 'heroicons_outline:map',
        meta: {
            claim: AdminNavigationClaims.LiveMapNavigationPermission
        }
    },
    {
        title: 'Dükkan',
        type: 'collapsable',
        icon: 'heroicons_outline:office-building',

        children: [
            {
                title: 'Tümü',
                type: 'basic',
                link: '/admin/store/list'
            },
            {
                title: 'Detay',
                type: 'basic',
                link: '/admin/store/details/null'
            },
            {
                title: 'Başvurular',
                type: 'basic',
                link: '/admin/store/registry/list',
                meta: {
                    claim: AdminNavigationClaims.StoreRegistryRequestNavigationPermission
                }
            }
        ]
    },
    {
        id: 'fe8af7ea-0b10-4b0b-aa91-586c8f2cc8ce',
        title: 'Kurye',
        type: 'collapsable',
        icon: 'bike_scooter',
        children: [
            {
                title: 'Tümü',
                type: 'basic',
                link: '/admin/carrier/list'
            },
            {
                title: 'Detay',
                type: 'basic',
                link: '/admin/carrier/details/null'
            },
            {
                title: 'Başvurular',
                type: 'basic',
                link: '/admin/carrier/registry/list',
                meta: {
                    claim: AdminNavigationClaims.CarrierRegistryRequestNavigationPermission
                }
            }
        ]
    }
];
