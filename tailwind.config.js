/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Gilroy Light", "sans-serif"],
				'gilroy-bold': ["Gilroy Bold", "sans-serif"],
				'gilroy-extrabold': ["Gilroy ExtraBold", "sans-serif"],
				number: ["Gilroy Medium", "sans-serif"],
			},
			fontSize: {
				logo: '14pt'
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
