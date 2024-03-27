import { tss } from 'tss-react/mui'
import { alpha } from "@mui/material/styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';

type CustomButtonProps = {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    icon?: React.ReactNode | boolean;
    selected: boolean;
}

export function CustomButton(props: CustomButtonProps) {

    const { className, onClick, children, icon, selected } = props
    const { cx, classes } = useStyles()
    const Icon = React.isValidElement(icon) ? icon : icon ? <ArrowForwardIcon /> : null

    return (
        <button
            className={cx(classes.button, {[classes.selected]: selected}, classes.hoverEffect, className)}
            onClick={onClick}
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
            "transition": "background 0.4s ease-in-out, border 0.4s ease-in-out, color 0.4s ease-in-out",
        },
        "hoverEffect": {
            "&:not($selected):hover": {
                "background": alpha(theme.palette.secondary.light, 0.15),
                "border": `1px solid ${alpha(theme.palette.secondary.light, 0.2)}`,
            }
        },
        "selected": {
            "background": theme.palette.secondary.dark,
            "color": theme.palette.primary.main,
        }
    }))