import { tss } from 'tss-react/mui'
import { alpha } from "@mui/material/styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
import Button from '@mui/material/Button';

type CustomButtonProps = {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    icon?: React.ReactNode | boolean;
    selected?: boolean;
}

export function CustomButton(props: CustomButtonProps) {

    const { className, onClick, children, icon, selected } = props
    const { cx, classes } = useStyles({ selected: !!selected })
    const Icon = React.isValidElement(icon) ? icon : icon ? <ArrowForwardIcon /> : null

    return (
        <Button
            className={cx(classes.button, { [classes.selected]: selected }, className)}
            onClick={onClick}
        >
            {children}
            {Icon}
        </Button>
    )
}

const useStyles = tss
    .withParams<{ selected: boolean }>()
    .create(({ theme, selected }) => ({
        "button": {
            "textTransform": "none",
            "border": `1px solid ${theme.palette.primary.dark}`,
            "background": selected ? theme.palette.secondary.dark : theme.palette.primary.dark,
            "color": selected ? theme.palette.primary.main : theme.palette.primary.contrastText,
            "transition": "background 0.4s ease-in-out, border 0.4s ease-in-out, color 0.4s ease-in-out",
            "&:hover": {
                "background": selected ? theme.palette.secondary.dark : alpha(theme.palette.secondary.light, 0.15),
                "border": selected ? "" : `1px solid ${alpha(theme.palette.secondary.light, 0.2)}`,
            },
        },
        "selected": {
            "background": theme.palette.secondary.dark,
            "color": theme.palette.primary.main,
        }
    }))