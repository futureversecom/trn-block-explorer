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
				"sans": ["Gilroy Light", "sans-serif"],
				"gilroy": ["Gilroy Regular", "sans-serif"],
				"gilroy-bold": ["Gilroy Bold", "sans-serif"],
				"gilroy-medium": ["Gilroy Medium", "sans-serif"],
				"gilroy-extrabold": ["Gilroy ExtraBold", "sans-serif"],
				"number": ["Gilroy Medium", "sans-serif"],
			},
			fontSize: {
				nav: "11.6px",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
