module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        130: "130px",
        240: "240px",
        280: "280px",
        320: "320px",
        380: "380px",
        600: "600px",
        630: "630px",
        660: "660px",
        1080: "1080px",
      },
      height: {
        45: "45px",
        50: "50px",
        70: "70px",
        180: "180px",
        755: "755px",
      },
      maxWidth: {
        1080: "1080px",
      },
      boxShadow: {
        input: "0px 2px 4px rgba(0, 0, 0, 0.1);",
      },
      fontSize: {
        heading1: ["40px", "50px"],
        heading2: ["32px", "35px"],
        heading3: ["24px", "25px"],
        basicText: ["18px", "30px"],
        btnText: ["18px", "20px"],
        math: ["24x", "24px"],
        "24-30": ["24px", "30px"],
        "18-20": ["18px", "20px"],
        "12-15": ["12px", "15px"],
        "14-15": ["14px", "15px"],
      },
      colors: {
        metalFrom: "rgba(43, 48, 58, 1)",
        metalTo: "rgba(63, 71, 86, 1)",
        metalLightFrom: "rgba(211, 218, 232, 1)",
        metalLightTo: "rgba(167, 183, 216, 1)",
        redFrom: "rgba(145, 24, 18, 1)",
        redTo: "rgba(225, 38, 28, 1)",
        metalMiddle: "#7A818E",
      },
      borderRadius: {
        30: "30px",
      },
      spacing: {
        10: "10px",
        20: "20px",
        40: "40px",
      },
      linearBorderGradients: {
        directions: {
          t: "to top",
          tr: "to top right",
          r: "to right",
          br: "to bottom right",
          b: "to bottom",
          bl: "to bottom left",
          l: "to left",
          tl: "to top left",
        },
        colors: {
          metalLight: ["#D3DAE8 0%", "#A7B7D8 100%"],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-border-gradients")()],
};
