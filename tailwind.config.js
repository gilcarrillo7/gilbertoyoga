/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "15px",
				sm: "1rem",
				lg: "2rem",
				xl: "3rem",
				"2xl": "4rem",
			},
		},
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
			belleza: ["Belleza", "sans-serif"],
			beujolais: ["Beaujolais", "sans-serif"],
		},
		extend: {
			colors: {
				yellow: "#ffe003",
				gold: "#ffc107",
			},
			flex: {
				2: "1 0 45%",
			},
		},
	},
	plugins: [],
};
