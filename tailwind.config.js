/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gap: {
        socialIcons: "54px",
        navLinks: "8px",
      },
      width: {
        socialIconsContainer: "340px",
        navLinkContainer: "600px",
        homeBGImage: "400px",
      },
      height: {
        homeBGImage: "560px",
      },
      fontSize: {
        navLinks: "24px",
        navLinksHover: "36px",
        footer: "16px",
      },
    },
  },
  plugins: [],
};
