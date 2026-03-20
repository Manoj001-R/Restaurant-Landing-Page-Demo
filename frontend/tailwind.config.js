/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        breathe: {
          "0%, 100%": { opacity: "0.75", transform: "translateY(-50%) scale(1)" },
          "50%": { opacity: "1", transform: "translateY(-50%) scale(1.4)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "breathe-slow": "breathe 6s ease-in-out infinite",
        "shimmer-fast": "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
