import { tss } from 'tss-react/mui'
import { alpha } from "@mui/material/styles";

type PropsCustomButton = {
    className?: string;
    onClick?: () => void;
    onHover: () => void;
    children: React.ReactNode;
}

export function CustomButton(props: PropsCustomButton) {

    const { className, onClick, onHover, children } = props
    const { cx, classes } = useStyles()

    return (
        <button
            className={cx(classes.button, className)}
            onClick={onClick}
            onMouseOver={onHover}
        >
            {children}
        </button>
    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "button": {
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