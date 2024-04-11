import { createTheme, alpha } from "@mui/material/styles";

const typography = {
    fontFamily: "Geist",
    h1: {
        fontFamily: "Georgia",
    },
};

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
      xs: false; // removes the `xs` breakpoint
      sm: false;
      md: false;
      lg: false;
      xl: false;
      mobile: true; // adds the `mobile` breakpoint
      tablet: true;
      laptop: false;
      desktop: true;
    }
  }

export const breakpoints = {
    values: {
        mobile: 0,
        tablet: 640,
        desktop: 1200,
    },
};

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        text: {
            primary: "#f6edde",
            secondary: "#ebd8bd",
            disabled: "#373E4F",
        },
        background: {
            default: "#20242E",
            paper: "#2C323F",
        },
        primary: {
            main: "#2C323F",
            light: "#373E4F",
            dark: "#20242E",
        },
        secondary: {
            main: alpha("#debc93", 1),
            light: alpha("#ebd8bd", 0.5),
            dark: alpha("#d4a373", 1),
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
    typography,
    breakpoints,
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        text: {
            primary: "#2C323F",
            secondary: "#373E4F",
            disabled: "#D0D4DA",
        },
        background: {
            default: "#F6EDDE",
            paper: "#EBD8BD",
        },
        primary: {
            main: "#F6EDDE",
            light: "#EAEAEA",
            dark: "#F6EDDE",
        },
        secondary: {
            main: alpha("#c68249", 1),
            light: alpha("#d4a373", 1),
            dark: alpha("#b86d3e", 1),
        },
    },
    typography,
    breakpoints,
});

export const lightCustomTheme = {
    "colors": {
        "textFocus": lightTheme.palette.primary.main,
    }
}

export const darkCustomTheme: typeof lightCustomTheme = {
    "colors": {
        "textFocus": darkTheme.palette.primary.main,
    }
};
