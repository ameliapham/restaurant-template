import { tss } from 'tss-react/mui'
import { CustomButton } from './CustomButton'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type PropsCustomCard = {
    className?: string;
    backgroundImage: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

export function CustomCard(props: PropsCustomCard) {

    const { className, backgroundImage, children, onClick } = props
    const { cx, classes } = useStyles()

    return (
        <div
            className={cx(classes.root, className)}
        >

            <div
                className={classes.background}
                style={{ backgroundImage: `url(${backgroundImage})` }}
                onClick= {onClick}
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
    .withNestedSelectors<"button" | "background">()
    .create(({ theme, classes }) => ({
        "root": {
            "position": "relative",
            "display": "flex",
            "justifyContent": "flex-end",
            "boxSizing": "border-box",
            "borderRadius": "10px",
            "overflow": "hidden",
            "background": "center center/cover",
            "cursor": "pointer",
            [`&:hover .${classes.button}`]: {
                "color": theme.palette.secondary.dark,
                "background": theme.palette.primary.dark,
                "border": `1px solid ${theme.palette.primary.dark}`,
                "filter": "none"
            },
            [`&:hover .${classes.background}`]: {
                "filter": "brightness(1.05)"
            }
        },
        "background": {
            "position": "absolute",
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "100%",
            "background": "center center/cover",
            "transition": "filter 0.4s ease-in-out",
            "filter": "brightness(0.8)"
        },
        "button": {
            "zIndex": 1,
            "alignSelf": "flex-end",
            "padding": "10px 10px 10px 20px",
            "borderRadius": "15px 0 0 0"
        }
    }))