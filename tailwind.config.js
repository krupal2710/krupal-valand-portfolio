/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust as per your project
  ],
  theme: {
    extend: {
      colors: {
        primarytext: "#7B61FF",
        darkbackground : "#0A0A1A",
        secondarytext : "#FFFFFF",

      },
      fontFamily: {
        primary: ['"Poppins"', "sans-serif"],
        secondary: ['"Roboto"', "sans-serif"],
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(45deg, #7B61FF, #7B61FF, #FF61B6)',
        'gradient-2': 'linear-gradient(45deg, #61FFAE, #61FFD9, #61B6FF)',
        'gradient-3': 'linear-gradient(90deg, rgb(14, 12, 39) 39%, rgb(2, 2, 20) 67%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        floatReverse: 'floatReverse 3s ease-in-out infinite',
      },
       screens: {
      'xs': '400px', // Optional: better mobile control
    },
    },
  },
  plugins: [],
};
// #0a0a1a