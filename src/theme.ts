import { createTheme, alpha } from "@mui/material/styles";

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
        error: {
            main: "#E04E41",
            light: "#EF7F67",
            dark: "#CC0B0B",
        },
        warning: {
            main: "#FFB93F",
            light: "#FFCD66",
            dark: "#FF9800",
        },
        info: {
            main: "#57B9F7",
            light: "#79D0FB",
            dark: "#2196F3",
        },
        success: {
            main: "#94A868",
            light: "#F5FDC6",
            dark: "#41521F",
        },
    },
    typography: {
        fontFamily: "Geist, sans-serif", 
        h1: {
            fontFamily: "Time New Roman",
            fontSize: "112px",
            fontWeight: 700,
            //lineHeight: "20rem",
        },
        h2: {
            fontSize: "64px",
            fontWeight: 700,
            //lineHeight: 72,
        },
        h3: {
            fontSize: "48px",
            fontWeight: 700,
            //lineHeight: 56,
        },
        h4: {
            fontSize: "34px",
            fontWeight: 700,
            lineHeight: 40,
        },
        h5: {
            fontSize: "24px",
            fontWeight: "semi-bold",
            lineHeight: 32,
        },
        subtitle1: {
            fontSize: "24px",
            fontWeight: "medium",
            lineHeight: 32,
        },
        subtitle2: {
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: 28,
        },
        body1: {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: 24,
        },
        body2: {
            fontSize: "14px",
            fontWeight: 300,
            lineHeight: 20,
        },
        button: {
            fontSize: "14px",
            fontWeight: 300,
            lineHeight: 20,
        },
        caption: {
            fontSize: "12px",
            fontWeight: 200,
            lineHeight: 16,
        },
    }
});