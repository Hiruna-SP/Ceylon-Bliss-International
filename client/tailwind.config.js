// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          boldonse: ['Boldonse', 'system-ui', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
          merriweather: ['Merriweather', 'serif'],
          cinzel: ['Cinzel', 'serif'],
          lobster: ['"Lobster Two"', 'cursive'],
        },
      },
    },
    plugins: [],
  };