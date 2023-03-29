/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				'2xl': '1320px',
				'3xl': '1600px',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
});
