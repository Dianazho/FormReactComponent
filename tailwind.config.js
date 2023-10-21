/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        1: "0.2rem",
        2: "0.4rem",
        3: "0.8rem",
        4: "1.2rem",
        5: "1.6rem",
        6: "2.4rem",
        7: "3.2rem",
        8: "4.8rem",
        9: "6.4rem",
        10: "8rem",
        11: "9.6rem",
        12: "12rem",
        350: "350px",
      },
      colors: {
        background: "#f2ebfb",
        text: "#0f175d",
        lightGrey: "#c0c0c0",
        darkPurple: "#7221d7",
        hoverPurple: "#671ec2",
        lightPurple: "#ccb4e4",
        darkRed: "#ec4444",
        mediumRed: "#f47474",
        lightRed: "#f4acac",
      },
      maxWidth: {
        350: "350px",
      },
    },
  },
  plugins: [],
};

// - SPACING SYSTEM (px)
// 2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

// - FONT SIZE SYSTEM (px)
// 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
