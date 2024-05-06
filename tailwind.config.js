/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{liquid,js}",
    "./tailwind/pre-process-template/**/*.liquid"
  ],
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem'
      },
      width: {
        'slider-1': '100%',
        'slider-2': 'calc((100% - 0.5rem)/2)',
        'slider-3': 'calc((100% - 1rem)/3)',
        'slider-4': 'calc((100% - 1.5rem)/4)',
        'slider-5': 'calc((100% - 2rem)/5)',
        'slider-6': 'calc((100% - 2.5rem)/6)',
      }
    },
  },
  plugins: [],
}

