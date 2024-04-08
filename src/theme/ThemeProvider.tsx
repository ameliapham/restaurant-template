import { DarkModeProvider, useDarkMode } from "./useDarkMode";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

type ThemeProviderProps = {
    children: React.ReactNode;
};

export function ThemeProvider(props: ThemeProviderProps) {
    const { children } = props;

    return (
        <DarkModeProvider>
            <ThemeProviderContextualized>
                {children}
            </ThemeProviderContextualized>
        </DarkModeProvider>
    )
}

function ThemeProviderContextualized(props: { children: React.ReactNode }) {
    const { children } = props;

    const { isDarkMode } = useDarkMode();

    return (
        <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            {children}
        </MuiThemeProvider>
    )
}