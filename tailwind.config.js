export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        lavender: "#8B7AA8",
        gold: "#C9A24D",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Lato"', "sans-serif"],
        script: ['"Great Vibes"', "cursive"],
      },
      backgroundImage: {
        // We can add a subtle texture here if needed, or use inline styles for dynamic images
      },
    },
  },
  plugins: [],
};
