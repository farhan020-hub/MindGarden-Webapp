module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 50: "#eff0f1", 100: "#cccccc", 800: "#2a6049" },
        black: { 900: "#000000" },
        indigo: { A700: "#0018f7" },
        teal: { 700: "#007d6e" },
        gray: { 50: "#fcf8f4", 900: "#1a1a1a", "900_7f": "#2727277f" },
        deep_orange: { 400: "#ec744a" },
        white: { A700: "#ffffff" },
        green: { 400: "#5eb47c" },
      },
      boxShadow: { xs: "0px 4px  4px 0px #0000003f" },
      fontFamily: { manrope: "Manrope", poppins: "Poppins" },
      backgroundImage: {
        gradient: "linear-gradient(270deg ,#007d6e,#5eb47c)",
        gradient1: "linear-gradient(180deg ,#2727277f,#000000)",
        gradient6: "linear-gradient(180deg, #58b07b,#037f6e)",
        gradient2: "linear-gradient(180deg, #58b07b,#319a75,#08816f)",
        gradient3: "linear-gradient(180deg, #58b07b,#2f9875,#08826f)",
        gradient4: "linear-gradient(180deg, #5ab17b,#08826f)",
        gradient5: "linear-gradient(180deg, #5ab27b,#07816f)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
