/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
	content: [
		"./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				Roboto: ["Roboto", "sans-serif"],
				Saira: ["Saira"],
				Dancing: ["Dancing Script"],
				Cedarville: ["Cedarville Cursive"],
				TiltPrism: ["Tilt Prism"],
				TiltNeon: ["Tilt Neon"],
			},
		},
	},
	plugins: [],
});
