import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f7ff",
          100: "#e0efff",
          500: "#0066ff",
          600: "#0052cc",
          700: "#003d99",
          900: "#001a4d",
        },
        secondary: {
          50: "#f5f9fc",
          500: "#00d9ff",
          600: "#00b8d4",
          700: "#0099b3",
        },
        accent: "#ff6b35",
        success: "#2ecc71",
        neutral: {
          50: "#f5f5f5",
          100: "#e8e8e8",
          200: "#d1d1d1",
          700: "#4a4a4a",
          800: "#2a2a2a",
          900: "#1a2332",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xs: ["14px", { lineHeight: "20px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "28px" }],
        xl: ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["28px", { lineHeight: "36px" }],
        "4xl": ["36px", { lineHeight: "40px" }],
        "5xl": ["48px", { lineHeight: "50px" }],
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in",
        slideUp: "slideUp 0.6s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
