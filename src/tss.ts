
import { useMemo } from "react";
import { createTss } from "tss-react";
import { useTheme } from "@mui/material/styles";
import { getThemeExtensions } from "theme/getThemeExtensions";

function useContext() {

    const theme = useTheme();

    const { scrollbarStyles } = useMemo(()=> getThemeExtensions(theme), [theme]);

    return {
        theme,
        scrollbarStyles,
    };

}

export const { tss } = createTss({
    useContext
});