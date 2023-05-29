/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js,php}'],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        'monts': ['Montserrat Alternates', 'sans-serif'],
        'fraun': ['Fraunces', 'serif']
      },
      keyframes: {
        fadeInSlideRightDown: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px) translateY(-100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0)'
          },
        }
      },
      animation: {
        fadeInSlideRightDown: 'fadeInSlideRightDown 3s ease-out'
      } ,
      
         
    },
  },
  
  plugins: [],
 
}

