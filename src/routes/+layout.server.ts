import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ cookies }) => {
	const isDark = cookies.get('isDark') ?? 'false';
	return { isDark };
};
