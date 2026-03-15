/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937",
        secondary: "#6B7280",
        accent: "#3B82F6",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        frozen: "#6B7280",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Menlo", "Monaco", "monospace"],
      },
    },
  },
  plugins: [],
};
