const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "rgb(0, 165, 184)",
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        cyan: {
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), ["@tailwindcss/postcss"]],
};

export default config;
