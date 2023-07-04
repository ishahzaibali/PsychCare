/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
	content: ['./src/**/*.{js,jsx,ts,tsx}'],

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
			BackgroundColor: {
				blackGradient:
					'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
			},
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require('@tailwindcss/forms'),
		// require('daisyui'),
	],
});
