import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/preline/preline.js'],

	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem'
				},
				width: '8xl'
			},
			screens: {
				xs: '460px'
			}
		}
	},
	plugins: [typography, daisyui],
	daisyui: {
		themes: ['wireframe', 'business']
	}
} as Config;
