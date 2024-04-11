import { tss } from 'tss-react/mui'
import { CustomButton } from './CustomButton'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { alpha } from '@mui/material/styles'

type PropsCustomCard = {
    className?: string;
    backgroundImageUrl: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

export function CustomCard(props: PropsCustomCard) {

    const { className, backgroundImageUrl, children, onClick } = props
    const { cx, classes } = useStyles({ backgroundImageUrl })

    return (
        <div
            className={cx(classes.root, className)}
        >

            <div
                className={classes.background}
                onClick={onClick}
            ></div>

            <CustomButton className={classes.button}
                onClick={onClick}
                icon={<ArrowForwardIcon />}
            >
                {children}
            </CustomButton>

        </div>
    )
}

const useStyles = tss
    .withName("CustomCard")
    .withParams<{ backgroundImageUrl: string }>()
    .withNestedSelectors<"button" | "background">()
    .create(({ theme, classes, backgroundImageUrl }) => ({
        "root": {
            "position": "relative",
            "display": "flex",
            "justifyContent": "flex-end",
            "boxSizing": "border-box",
            "borderRadius": theme.spacing(2),
            "overflow": "hidden",
            "cursor": "pointer",
            [`&:hover .${classes.button}`]: {
                "color": theme.palette.secondary.dark,
                "background": theme.palette.primary.dark,
                "filter": "none",
                "border": `1px solid ${alpha(theme.palette.secondary.light, 0)}`,
            },
            [`&:hover .${classes.background}`]: {
                "filter": "brightness(1.05)"
            },

        },
        "background": {
            "position": "absolute",
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "100%",
            "background": `url(${backgroundImageUrl}) center center/cover`,
            "transition": "filter 0.4s ease-in-out",
            "filter": "brightness(0.8)",
        },
        "button": {
            "zIndex": 1,
            "alignSelf": "flex-end",
            "padding": "10px 10px 10px 20px",
            "borderRadius": `${theme.spacing(2)} 0 ${theme.spacing(2)} 0`,
        }
    }))