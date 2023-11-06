	/** @type {import('tailwindcss').Config} */
	export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
		colors: {
			black: "#131313",
		},
		fontFamily: {
			Oswald: ["Oswald", "sans-serif"],
			"Bebas-Neue": ["Bebas-Neue", "sans-serif"],
		},
		},
	},
	plugins: [require("flowbite/plugin")],
	};
