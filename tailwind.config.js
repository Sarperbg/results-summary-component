/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'lightred': 'hsl(0, 100%, 67%)',
        'orangeyellow': 'hsl(39, 100%, 56%)',
        'greenteal': 'hsl(166, 100%, 37%)',
        'cobaltblue': 'hsl(234, 85%, 45%)',
        'slateblue': 'hsl(252, 100%, 67%)',
        'royalblue': 'hsl(241, 81%, 54%)',
        'violetblue': 'hsla(256, 72%, 46%, 1)',
        'persianblue': 'hsla(241, 72%, 46%, 0)',
        'white': 'hsl(0, 0%, 100%)',
        'pareblue': 'hsl(221, 100%, 96%)',
        'lavender': 'hsl(241, 100%, 89%)',
        'darkgrayblue':'hsl(224, 30%, 27%)',
        'primary': '#462cdd;'
      },
    },
  },
  plugins: [],
}