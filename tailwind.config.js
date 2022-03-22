module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "media",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Graphik", "sans-serif"],
				serif: ["Merriweather", "serif"],
			},
		},
	},
	plugins: [],
};
