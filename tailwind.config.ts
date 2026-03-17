import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#0D0D1F",
        surface: "#13132B",
        "surface-2": "#1A1A35",
        coral: {
          DEFAULT: "#FF6B6B",
          dark: "#E85555",
          light: "#FF9090",
        },
        mint: {
          DEFAULT: "#4ECDC4",
          dark: "#3AB3AB",
          light: "#7DDED7",
        },
        violet: {
          DEFAULT: "#9B59B6",
          dark: "#7D3F99",
          light: "#B87FCC",
        },
        amber: {
          custom: "#F7C59F",
        },
        sky: {
          custom: "#74B0FF",
        },
        neon: {
          green: "#39FF85",
          pink: "#FF3CAC",
          blue: "#4FC3F7",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(155,89,182,0.3), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(78,205,196,0.2), transparent), radial-gradient(ellipse 50% 60% at 20% 80%, rgba(255,107,107,0.2), transparent)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
        "coral-gradient": "linear-gradient(135deg, #FF6B6B, #FF9090)",
        "mint-gradient": "linear-gradient(135deg, #4ECDC4, #7DDED7)",
        "violet-gradient": "linear-gradient(135deg, #9B59B6, #B87FCC)",
        "blue-gradient": "linear-gradient(135deg, #74B0FF, #4FC3F7)",
        "amber-gradient": "linear-gradient(135deg, #F7C59F, #FFD6A5)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        "glass-hover": "0 16px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
        coral: "0 0 30px rgba(255,107,107,0.4)",
        mint: "0 0 30px rgba(78,205,196,0.4)",
        violet: "0 0 30px rgba(155,89,182,0.4)",
        neon: "0 0 20px rgba(57,255,133,0.5)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.5s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(155,89,182,0.3)" },
          "100%": { boxShadow: "0 0 20px rgba(155,89,182,0.8)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      gridTemplateColumns: {
        "auto-fill-card": "repeat(auto-fill, minmax(280px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
