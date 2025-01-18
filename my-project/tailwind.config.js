/** @type {import('tailwindcss').Config} */
export default {
  content: [// Specifies the files Tailwind should scan for class names.
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",// Files where Tailwind will look for class names
  ],
  theme: {// Allows you to customize the default theme (e.g., colors, spacing).
    extend: {// Add new styles or extend existing ones without overwriting defaults.
      colors:{
        primary:"#ffcf3a",// Adds a custom color
        secondary:"#0063ff"
      },
      container:{
        center:true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      }
    
    },
  },
  plugins: [],// Add custom plugins for additional functionality.
}

