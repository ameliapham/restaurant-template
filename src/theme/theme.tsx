import { createTheme, alpha } from "@mui/material/styles";

const typography = {
    fontFamily: "Geist, sans-serif",
};

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        text: {
            primary: "#F3F2F0",
            secondary: "#D0D4DA",
            disabled: "#373E4F",
        },
        primary: {
            main: "#2C323F",
            light: "#373E4F",
            dark: "#20242E",
        },
        secondary: {
            main: alpha("#D4A373", 0.7),
            light: alpha("#D4A373", 0.4),
            dark: alpha("#D4A373", 1.0),
        },
    },
    typography
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
    typography
});
