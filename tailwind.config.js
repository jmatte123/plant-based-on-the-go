/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-image': "url('unnamed.png')"
      }
    },
    colors: {
      main: '#16401b'
    }
  },
  plugins: []
}
