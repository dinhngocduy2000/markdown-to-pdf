/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export const content = ["./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    width: {
      128: "60rem",
    },
    height: {
      90: "21rem",
    },

    flex: {
      2: "2 2 0%",
    },
    fontFamily: {
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
    backgroundColor: {
      defaultBg: "#f7f8fc",
      primary: "#853bac",
      // primary: '#313b80',
    },
    textColor: {
      primary: "#853bac",
      // primary: '#313b80'
    },
    fill: {
      primary: "#853bac",
      // primary: '#313b80'
    },
  },
};
export const base = "./";

export const corePlugins = {
  preflight: false,
};
