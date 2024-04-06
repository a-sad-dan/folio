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
		extend: {
			keyframes: {
				slideIn: {
					from: {
						transform: 'translateY(-100%)',
					},
					to: {
						transform: 'translateY(0)',
					},
				},
				slideOut: {
					from: {
						transform: 'translateY(0)',
					},
					to: {
						transform: 'translateY(-100%)',
					},
				},
			},
			spacing: {
				'0.125lh': '0.125lh',
				'0.25lh': '0.25lh',
				'0.5lh': '0.5lh',
				'0.75lh': '0.75lh',
				'1lh': '1lh',
				'1.5lh': '1.5lh',
				'2lh': '2lh',
				'2.5lh': '2.5lh',
				'3lh': '3lh',
				'4lh': '4lh',
				'5lh': '5lh',
				'6lh': '6lh',
				'7lh': '7lh',
				'8lh': '8lh',
			},
		},
	},
	plugins: [],
};
export default config;
