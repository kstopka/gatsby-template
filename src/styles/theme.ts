import { DefaultTheme } from "styled-components";

const baseTheme = {
  layout: {
    maxWidth: "1440px",
    paddingX: "108px",
    paddingXMobile: "16px",
    navigationHeight: "88px",
    timerHeight: "24px",
    navigationAndTimerHeight: "112px",
  },
  breakpoints: {
    sm: "768px",
    md: "1024px",
    lg: "1200px",
    xl: "1440px",
  },
  fonts: {
    family: {
      main: "Cabin",
      secondary: "Cabin",
    },
    size: {
      h1: "42px",
      h2: "36px",
      h3: "32px",
      h4: "24px",
      h5: "20px",
      h6: "16px",
      p: "16px",
      body_20: "18px",
      small: "13px",
    },
  },
  transitions: {
    standard: ".2s all linear",
    time: ".25s",
    type: "linear",
  },
};

const darkColors = {
  primary: {
    10: "#c7d2fe",
    20: "#a5b4fc",
    30: "#818cf8",
    40: "#6366f1",
    50: "#4f46e5",
    60: "#4338ca",
    70: "#3730a3",
    80: "#312e81",
    90: "#1e1b4b",
  },
  neutral: {
    10: "#e5e7eb",
    20: "#d1d5db",
    30: "#9ca3af",
    40: "#6b7280",
    50: "#4b5563",
    60: "#374151",
    70: "#1f2937",
    80: "#111827",
    90: "#0a0a0a",
  },
  error: {
    10: "#FFF7F5",
    20: "#FFF7F5",
    30: "#FFF7F5",
    40: "#FFF7F5",
    50: "#FFF7F5",
    60: "#FFF7F5",
    70: "#FFF7F5",
    80: "#FFF7F5",
    90: "#FFF7F5",
  },
  warning: {
    10: "#FFFCF5",
    20: "#FFFCF5",
    30: "#FFFCF5",
    40: "#FFFCF5",
    50: "#FFFCF5",
    60: "#FFFCF5",
    70: "#FFFCF5",
    80: "#FFFCF5",
    90: "#FFFCF5",
  },
  success: {
    10: "#F7FCFA",
    20: "#F7FCFA",
    30: "#F7FCFA",
    40: "#F7FCFA",
    50: "#F7FCFA",
    60: "#F7FCFA",
    70: "#F7FCFA",
    80: "#F7FCFA",
    90: "#F7FCFA",
  },
  shades: {
    asHeader: "#000000",
  },
  background: "#1f2937",
};

const lightColors = {
  primary: {
    10: "#e0f2f1",
    20: "#b2dfdb",
    30: "#80cbc4",
    40: "#4db6ac",
    50: "#26a69a",
    60: "#009688",
    70: "#00897b",
    80: "#00796b",
    90: "#004d40",
  },
  neutral: {
    10: "#0a0a0a",
    20: "#111827",
    30: "#1f2937",
    40: "#374151",
    50: "#4b5563",
    60: "#6b7280",
    70: "#9ca3af",
    80: "#d1d5db",
    90: "#f3f4f6",
  },
  error: {
    10: "#FFF7F5",
    20: "#FFF7F5",
    30: "#FFF7F5",
    40: "#FFF7F5",
    50: "#FFF7F5",
    60: "#FFF7F5",
    70: "#FFF7F5",
    80: "#FFF7F5",
    90: "#FFF7F5",
  },
  warning: {
    10: "#FFFCF5",
    20: "#FFFCF5",
    30: "#FFFCF5",
    40: "#FFFCF5",
    50: "#FFFCF5",
    60: "#FFFCF5",
    70: "#FFFCF5",
    80: "#FFFCF5",
    90: "#FFFCF5",
  },
  success: {
    10: "#F7FCFA",
    20: "#F7FCFA",
    30: "#F7FCFA",
    40: "#F7FCFA",
    50: "#F7FCFA",
    60: "#F7FCFA",
    70: "#F7FCFA",
    80: "#F7FCFA",
    90: "#F7FCFA",
  },
  shades: {
    asHeader: "#000000",
  },
  background: "#ffffff",
};

const themeDark: DefaultTheme = {
  ...baseTheme,
  colors: darkColors,
};

const themeLight: DefaultTheme = {
  ...baseTheme,
  colors: lightColors,
};

const theme = {
  dark: themeDark,
  light: themeLight,
};

export default theme;
