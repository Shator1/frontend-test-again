/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  transitionProperty: {
			width: "width",
		  },
		  fontSize: {
			'17px': '17px', // Add custom font size
			'13px': '13px'
		  },
		  colors: {
			'custom-navbar': '#141F23',
			"BKG": "#141F23",
			"Strk_btn": "#5A98C1",
			"Btn_Main": "#86CEFF",
			"Inpt_Bg": "#1F2D34",
			"input_brdr": "#44656D",
			"orng": "#FFAB36",
		  }
		},
		fontFamily: {
			sans: ['Poppins', 'sans-serif'], // Make Poppins the default font
		},
		screens: {
		  'sm': '640px',
		  'md': '768px',
		  'lg': '1024px',
		  'xl': '1280px',
		  '2xl': '1536px',
		  'max-md': {'max': '768px'},
		  'max-lg': {'max': '1024px'},
		  'max-sm': {'max': '640px'},
		},
	},
	plugins: [

	],
}
