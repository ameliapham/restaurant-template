import { useDarkMode } from "./useDarkMode";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

export function ThemeProvider(props: { children: React.ReactNode }){ 

    const { children } = props;

    const { isDarkMode } = useDarkMode();

    return (
        <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            {children}
        </MuiThemeProvider>
    );
}