

import { createTss } from "tss-react";
import { useWindowInnerSize } from "powerhooks/useWindowInnerSize";
import { useTheme } from "@mui/material/styles";
import { lightCustomTheme, darkCustomTheme } from "./theme";

function useContext() {

    const { windowInnerWidth } = useWindowInnerSize();
    const theme = useTheme();

    const isDarkMode = theme.palette.mode === "dark";

    const customTheme = isDarkMode ? darkCustomTheme : lightCustomTheme;

    return { theme, windowInnerWidth, customTheme };
}

export const { tss } = createTss({ useContext });

export const useStyles = tss.create({});