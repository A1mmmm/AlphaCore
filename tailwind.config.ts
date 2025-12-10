import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#111827",
        muted: "#f3f4f6",
        accent: {
          DEFAULT: "#2563eb",
          soft: "#dbeafe",
        },
        border: "#e5e7eb",
      },
      fontFamily: {
        sans: ["system-ui", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "1.25rem",
        xl: "1.75rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
