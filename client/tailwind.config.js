/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#2CC76C',
				secondary: '#FF9800',
				accent: {
					red: '#E57373',
					yellow: '#FFEB3B',
				},
				background: '#F5F5F5',
				text: {
					primary: '#333333',
					secondary: '#757575',
				},
				border: '#E0E0E0',
			},
		},
	},
	plugins: [],
};
