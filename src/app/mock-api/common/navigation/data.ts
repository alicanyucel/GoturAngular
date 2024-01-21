/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'collapsable',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
        children: [
            {
                id: 'example-1',
                title: 'Test',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/test'
            },
            {
                id: 'example-2',
                title: 'Test 2',
                type: 'aside',
                icon: 'heroicons_outline:chart-pie',
                link: '/test',
                children: [
                    {
                        id: 'example-3',
                        title: 'Test 2',
                        type: 'basic',
                        icon: 'heroicons_outline:chart-pie',
                        link: '/test'
                    }
                ]
            }
        ]
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'collapsable',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
