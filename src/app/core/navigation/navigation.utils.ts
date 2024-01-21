import { FuseNavigationItem } from "@fuse/components/navigation";

// NEEDS IMPROVEMENT.
export const isNavigationPermitted = (navigation: FuseNavigationItem, permissions: Array<string>): boolean => {
	if (navigation.type === 'basic' && (!navigation.meta?.claim || permissions.includes(navigation.meta?.claim))) {
		return true;
	}

	if (navigation.children) {
		navigation.children = navigation.children.filter(n => n.type === 'basic' && (!n.meta?.claim || permissions.includes(n.meta?.claim)));
		return navigation.children.length > 0;
	}
}
