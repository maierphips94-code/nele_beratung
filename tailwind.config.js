/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#8ba38d",             // Sage green
        "background-light": "#f4f1eb",  // Sand/cream
        "background-dark": "#2d2f2d",   // Dark charcoal
        "surface-light": "#ffffff",
        "surface-dark": "#3d403d",
        "text-main-light": "#2c302e",
        "text-main-dark": "#e8e6e1",
        "text-muted-light": "#6b726d",
        "text-muted-dark": "#a3a8a5",
        // Legacy compatibility
        cream: "#f4f1eb",
        forest: {
          DEFAULT: "#2c302e",
          light: "#3d403d",
          muted: "#6b726d",
        },
        terracotta: {
          DEFAULT: "#8ba38d",
          light: "#a3b8a5",
          dark: "#6b8a6d",
        },
        amber: {
          DEFAULT: "#8ba38d",
          light: "#a3b8a5",
          dark: "#6b8a6d",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        serif: ['"Playfair Display"', 'serif'],
        headline: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        label: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '30px',
        sm: '12px',
        md: '20px',
        lg: '30px',
        xl: '40px',
        '2xl': '50px',
        '3xl': '60px',
        full: '9999px',
        // Legacy
        '4xl': '40px',
        '5xl': '50px',
        '6xl': '60px',
      },
    },
  },
  plugins: [],
}
