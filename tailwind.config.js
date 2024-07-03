/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "image-mobile": " url('/mobile-image.png')",
        "image-desktop": "url('/desktop-image.png')",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["responsive"],
    },
  },
  plugins: [],
};
