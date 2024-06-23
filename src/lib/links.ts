import {
	MessageSquareQuote,
	Pill,
	Settings2,
	SquarePlus,
	Factory,
	PillBottle,
	BriefcaseMedical
} from 'lucide-svelte';
export const navLinks = [
	{ href: '/', title: 'Home' },
	{ href: '/about', title: 'About' },
	{ href: '/contact', title: 'Contact' },
	{ href: '/drugs', title: 'Drugs' },
	{ href: '/dashboard', title: 'Dashboard' }
];

export const dashboardLinks = [
	{ href: 'create', title: 'Add new items', icon: SquarePlus },
	{ href: 'edit', title: 'Edit', icon: Settings2 },
	{ href: 'requests', title: 'New requests', icon: Pill },
	{ href: 'messages', title: 'Messages', icon: MessageSquareQuote }
];

export const createLinks = [
	{ href: 'drug', title: 'Drug', icon: BriefcaseMedical },
	{ href: 'manufacturer', title: 'Manufacturer', icon: Factory },
	{ href: 'drug-item', title: 'Drug Item', icon: PillBottle }
];
