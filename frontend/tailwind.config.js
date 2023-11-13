import { screens } from "./tailwind.screen";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: screens,
    extend: {},
  },
  plugins: [],
};
