import type { Theme } from "@mui/material";

export function getScrollbarStyles(theme: Theme) {

  return {
    '&::-webkit-scrollbar': {
      "width": 7, /* Width of the scrollbar */
    },
    '&::-webkit-scrollbar-track': {
      "borderRadius": 9999,
      "background": theme.palette.background.default, /* Color of the scrollbar track */
    },
    '&::-webkit-scrollbar-thumb': {
      "borderRadius": 9999,
      "background": theme.palette.background.paper, /* Color of the scrollbar thumb */

    },
    '&::-webkit-scrollbar-thumb:hover': {
      "background": theme.palette.secondary.main, /* Color of the scrollbar thumb on hover */
    }
  }

}

export function getThemeExtensions(theme: Theme) {

  const scrollbarStyles= getScrollbarStyles(theme);

  return {
    scrollbarStyles
  };

}