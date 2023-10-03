/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				btc: {
					DEFAULT: '#F28E13',
					50: '#FCE1C1',
					100: '#FBD8AE',
					200: '#F8C687',
					300: '#F6B360',
					400: '#F4A13A',
					500: '#F28E13',
					600: '#C2700B',
					700: '#8D5108',
					800: '#583305',
					900: '#231402',
					950: '#080500',
				},
			},
		},
	},
	plugins: [],
}
