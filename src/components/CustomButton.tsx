import { tss } from 'tss-react/mui'
import { alpha } from "@mui/material/styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';

type PropsCustomButton = {
    className?: string;
    onClick?: () => void;
    onHover: () => void;
    children: React.ReactNode;
    icon?: React.ReactNode | boolean;
}

export function CustomButton(props: PropsCustomButton) {

    const { className, onClick, onHover, children, icon } = props
    const { cx, classes } = useStyles()
    const Icon = React.isValidElement(icon) ? icon : icon ? <ArrowForwardIcon /> : null

    return (
        <button
            className={cx(classes.button, className)}
            onClick={onClick}
            onMouseOver={onHover}
        >
            {children}
            {Icon}
        </button>
    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "button": {
            "display": "flex",
            "alignItems": "center",
            "gap": "5px",
            "border": `1px solid ${theme.palette.primary.dark}`,
            "background": theme.palette.primary.dark,
            "color": theme.palette.primary.contrastText,
            "padding": "10px",
            "borderRadius": "5px",
            "cursor": "pointer",
            "transition": "background 0.4s ease-in-out, border 0.4s ease-in-out",
            "&:hover": {
                "background": alpha(theme.palette.secondary.light, 0.15),
                "border": `1px solid ${alpha(theme.palette.secondary.light, 0.2)}`,

            }
        }
    }))