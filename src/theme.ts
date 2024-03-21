import { createTheme, alpha } from "@mui/material/styles";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        text: {
            primary: "#ffffff",
            secondary: "#ffffff",
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
});