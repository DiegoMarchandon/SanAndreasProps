export default {
    theme: {
      extend: {
        fontFamily: {
          oldlondon: ['var(--font-old-london)', 'serif'],
        },
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          '.text-shadow-outline': {
            'text-shadow': "-1px -1px 0 rgb(255, 252, 249), 1px -1px 0 rgb(255, 252, 249), -1px 1px 0 rgb(255, 252, 249), 1px 1px 0 rgb(255, 252, 249)"
          }
        })
      }  
    ]
  }
  