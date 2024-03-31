import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			text: '#120e07',
			background: '#fffffc',
			accent: '#064C37',
		},
		fontSize: {
			sm: '0.750rem',
			base: '1rem',
			lg: '1.333rem',
			xl: '1.777rem',
			'2xl': '2.369rem',
			'3xl': '3.158rem',
			'4xl': '4.210rem',
		},
		fontFamily: {
			heading: 'Space Mono',
			body: 'Space Mono',
		},
		fontWeight: {
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
		},
	},
	plugins: [],
};
export default config;
