/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16'
    },
    extend: {
      colors:{
        primary:'#14B8A6',
        secondary: '#64748b',
        drag: '#0F172A',
      },
      screens :{
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}
