import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '15':'15px',
      '21':'21px'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translateX(80%)",
          },
          "100%": {
            transform: "translateX(-20%)",
          },
        },

        moveline:{
          "0%":{
            height:"0",
          },
          "100%":{
            height:"100%",
          },
        }
      },

      movedown:{
        "0%":{
          opacity:"1",
          transform:"translateY(-30)",

        },
        "100%":{
          opacity:1,
          transform:"translateY(0)",
        },
      },

      blink:{
        "50%":{
          opacity:"0",
        },
        "80%":{
          opacity:"0.5",
        },
      },

      animation: {
        slide: "slide 60s linear infinite ",
        moveline : "moveline 10s linear forwards",
        movedown: "movedown 10s linear forwards",
        blink:"blink 10s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
