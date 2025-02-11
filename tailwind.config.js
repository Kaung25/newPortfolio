/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./public/**/*.{html,js}"],
  theme: {
    boxShadow: {
      'bgDark': '10px 10px 0px 0px rgba(43, 43, 43, 1)',
      'bgDarkSm': '4px 4px 0px 0px rgba(43, 43, 43, 1)',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'orange': '#FF553E',
      'dark': '#000000',
      'yellow': '#FEC426',
      'green': '#12E37F',
      'blue': '#0F52FF',
      'grey': '#909090',
      'lightgrey': '#2A2A2A',
      'light':'#BCBCBC',
    },

    screens: {
      // '2xs': '0px',
      // // => @media (min-width: 440px) { ... }

      'xs': '280px',
      // => @media (min-width: 280px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'ipad': '1024px',

      'lg': '1280px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1536px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '2140px',
      // => @media (min-width: 1536px) { ... }

      // '4xl': '2880px',
      // => @media (min-width: 1536px) { ... }


    },

    fontSize: {
      'xs': '0.875rem',
      'sm': '1rem',
      'base': '1.125rem',
      'lg': '1.25rem',
      'xl': '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '10rem',
      '10xl': '13rem',
     },
     
    extend: {
      scale: {
        '-1': '-1',
    }
      
    },
    plugins: [require("daisyui")],
    daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },

  extend: {
    animation: {
      'infinite-scroll': 'infinite-scroll 25s linear infinite',
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      }
    }                    
  },
  extend: {
    animation: {
      'infinite-scroll': 'infinite-scroll 50s linear infinite',
      'infinite-scroll2': 'infinite-scroll2 50s linear infinite',
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      },
      'infinite-scroll2': {
        from: { transform: 'translateX(-100%)' },  // Start from right
        to: { transform: 'translateX(0)' },      // End at original position (left)
      },
    },
  },
  
  
}}