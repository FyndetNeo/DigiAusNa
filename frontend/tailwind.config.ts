/* eslint-disable @typescript-eslint/no-unsafe-call */
import { cssToPlugin } from "./src/utils/tailwind/cssToPlugin"
import { screens } from "./tailwind.screen"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: screens,
    extend: {},
  },
  plugins: [
    cssToPlugin("./styles/utils.css"),
    cssToPlugin("./styles/typography.css"),
  ],
}
