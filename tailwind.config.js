/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        bodyColor: 'hsl(var(--body-color))',
        textColor: 'hsl(var(--text-color))',
        textColorLight: 'hsl(var(--text-color-light))',
        navColor: 'hsl(var(--nav-color) / 0.8)',
        titleColor: 'hsl(var(--title-color))',
        menuColor: 'hsl(var(--menu-color))',
        menuColorAlt: 'hsl(var(--menu-color-alt))',
      },
      backgroundImage: {
        activeMenu: 'linear-gradient(180deg, hsl(var(--menu-color) / 1), hsl(var(--menu-color) / 0.5))',
        heroImage: 'url(/assets/images/hero-bg.jpg)'
      },
      boxShadow: {
        'customShadow': '0 0 16px hsl(var(--menu-color));'
      }
    },
  },
  plugins: [],
}

