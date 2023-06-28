/** @type {import('tailwindcss').Config} */

const labelsClasses = ['indigo', 'gray', 'green', 'blue', 'red', 'purple'];
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	safelist: [
		...labelsClasses.map((lbl) => `bg-${lbl}-500`),
		...labelsClasses.map((lbl) => `bg-${lbl}-200`),
		...labelsClasses.map((lbl) => `text-${lbl}-400`),
	],
	theme: {
		extend: {
			screens: {
				base: '768px',
				'2xl': '1320px',
				'3xl': '1600px',
			},
			fontFamily: {
				sans: ['Open Sans'],
				poppins: ['poppins'],
			},
			gridTemplateColumns: {
				'1/5': '1fr 5fr',
			},
			boxShadow: {
				'3xl': 'rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem',
			},
		},
	},
	plugins: [require('flowbite/plugin'), require('@tailwindcss/forms')],
});
