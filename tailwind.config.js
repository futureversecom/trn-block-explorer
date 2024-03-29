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
				sans: ["Gilroy", "sans-serif"],
			},
			fontSize: {
				nav: "11.6px",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
