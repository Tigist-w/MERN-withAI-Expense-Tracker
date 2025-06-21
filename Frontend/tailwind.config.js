/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // 👈 Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Indigo
        secondary: "#06b6d4", // Cyan
        accent: "#facc15", // Yellow
        bgDark: "#111827", // Dark background
        bgLight: "#f9fafb", // Light background
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
