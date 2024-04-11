import { tss } from 'tss-react/mui'
import React from 'react';
import Button from '@mui/material/Button';

type HashtagButtonProps = {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    selected?: boolean;
}

export function HashtagButton(props: HashtagButtonProps) {

    const { className, onClick, children, selected } = props
    const { cx, classes } = useStyles({ selected: !!selected })

    return (
        <Button
            className={cx(classes.button, { [classes.selected]: selected }, className)}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

const useStyles = tss
    .withName("HashtagButton")
    .withParams<{ selected: boolean }>()
    .create(({ theme, selected }) => ({
        "button": {
            "textTransform": "none",
            "border": `1px solid ${theme.palette.primary.dark}`,
            "color": selected ? theme.palette.primary.main : theme.palette.text.primary,
            "transition": "background 0.4s ease-in-out, border 0.4s ease-in-out, color 0.4s ease-in-out",
            "&:hover": {
                "color": selected ? theme.palette.secondary.dark : theme.palette.secondary.light, 
            },
        },
        "selected": {
            "color": theme.palette.secondary.dark,
        }
    }))