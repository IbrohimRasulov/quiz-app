/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#293264",
        secondary: "#F5F7FB",
        bg_primary: "#4D5B9E",
        bg_select: "#D6DBF5",
        bg_success: "#94D7A2",
        bg_error: "#F8BCBC",
        horizontalLine: "#DBDEF0",
        btn_border: "#4D5B9E",
      },
      fontSize: {
        small: "15px",
        medium: "18px",
        large: "36px",
      },
      borderRadius: {
        small: "7.8px",
        medium: "10px",
        large: "15px",
      },
      backgroundImage: {
        intro_background: "url('/src/assets/background/intro-background.png')",
        test_background: "url('/src/assets/background/questions-background.png')",
      },
    },
  },
  plugins: [],
};
