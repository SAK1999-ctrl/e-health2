/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        "primary-purple": "#3D1687",
        "primary-purple-light": "#7C48B9",
        "secondary-purple": "#7B58BE",
        "primary-orange": "#F19022",
        "primary-orange-dark": "#EE663C",
        "text-gradient-start": "#7186FF",
        "text-gradient-end": "#FE7587",
        "heading-dark": "#15202E",
        "bg-grey": "#FAFAFA",
        "challenge-bg-start": "#29194d",
        "challenge-bg-end": "#2c293a",
        "services-bg": "#2C273C",
        "aboutus-bg": "#2C273C",
        // Brand colors for the new design
        brand: {
          blue: "#7286FF",
          purple: "#9265FF",
          magenta: "#C560FF",
          pink: "#FF409E",
          "purple-light": "#929BFF",
        },
        // Keep existing colors for backward compatibility
        indigo: {
          100: "#3d1687",
          200: "rgba(61, 22, 135, 0.28)",
        },
        blue: "rgba(115, 0, 255, 0.28)",
        darkorange: "#f19022",
        gray: {
          100: "#7a7a7a", // For footer email input text
          200: "#171717", // For footer background
          300: "rgba(13, 15, 35, 0.8)", // For promotional banner background
        },
        royalblue: "#7286ff",
        cornflowerblue: "#929bff",
        gainsboro: "#d9d9d9",
        whitesmoke: "#f6f6f7", // For footer text color
        lightslategray: "#8f9bb7", // For footer description text
        dimgray: "#525252",
        darkorchid: "#c560ff",
        darkslategray: "#202e48",
        mediumslateblue: "#9863fd",
        deeppink: "#ff409e",
        midnightblue: "#181059",
        slategray: "#484b6f",
      },
      backgroundImage: {
        "purple-gradient": "linear-gradient(90deg, #3D1687 0%, #7C48B9 100%)",
        "purple-secondary": "linear-gradient(90deg, #3D1687 0%, #7B58BE 100%)",
        "orange-gradient":
          "linear-gradient(95deg, #EE663C 2.62%, #F19022 53.9%)",
        "text-gradient": "linear-gradient(90deg, #7186FF 11%, #FE7587 100%)",
        "hero-bg":
          'url("https://api.builder.io/api/v1/image/assets/TEMP/c57b5f4d7040133e0447dafd71f0ff85b04ddc29?width=2880")',
        "hero-overlay":
          'url("https://api.builder.io/api/v1/image/assets/TEMP/7b338b7dcfc9b0f092a12f022a2625e81d42a76c?width=2880")',
        "features-pattern":
          "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)",
        "challenge-gradient":
          "linear-gradient(180deg, #29194d 0%, #2c293a 100%)",
        "hero-gradient":
          "linear-gradient(180deg, #1a0b2e 0%, #2d1b69 25%, #4a2c8a 50%, #6b3ba8 75%, #e91e63 100%)",
      },
      fontFamily: {
        raleway: [
          "Raleway",
          "-apple-system",
          "Roboto",
          "Helvetica",
          "sans-serif",
        ],
        "inter-tight": ["Inter Tight", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        "noto-sans": ["Noto Sans", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "num-12": "12px",
        "num-14": "14px",
        "num-15": "15px",
        "num-16": "16px",
        "num-20": "20px",
      },
      spacing: {
        "num-170": "170px",
        "num-231": "231px",
        "num-551": "551px",
        "num-267": "267px",
        "num-93_4": "93.4px",
        "num-31": "31px",
        "num-14_2": "14.2px",
        "num-24_5": "24.5px",
        "num-50": "50px",
      },
      borderRadius: {
        "num-8": "8px",
        "num-24": "24px",
      },
      letterSpacing: {
        "num--0_01": "-0.01em",
      },
      lineHeight: {
        "num-32": "32px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "float-left": "float-left 8s ease-in-out infinite",
        "float-right": "float-right 10s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "float-left": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px) rotateY(0deg)",
          },
          "25%": {
            transform: "translateY(-10px) translateX(5px) rotateY(2deg)",
          },
          "50%": {
            transform: "translateY(-5px) translateX(-3px) rotateY(-1deg)",
          },
          "75%": {
            transform: "translateY(-15px) translateX(8px) rotateY(1deg)",
          },
        },
        "float-right": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px) rotateY(0deg)",
          },
          "25%": {
            transform: "translateY(-8px) translateX(-5px) rotateY(-2deg)",
          },
          "50%": {
            transform: "translateY(-12px) translateX(3px) rotateY(1deg)",
          },
          "75%": {
            transform: "translateY(-6px) translateX(-8px) rotateY(-1deg)",
          },
        },
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
