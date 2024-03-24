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

    const { className, backgroundImage, children } = props
    const { cx, classes } = useStyles()

    return (
        <div
            className={cx(classes.root, className)}
        >

            <div
                className={classes.background}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            <CustomButton className={classes.button}
                onClick={() => { console.log("click") }}
                icon={<ArrowForwardIcon />}
            >
                {children}
            </CustomButton>

        </div>
    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "position": "relative",
            "display": "flex",
            "justifyContent": "flex-end",
            "boxSizing": "border-box",
            "borderRadius": "10px",
            "overflow": "hidden",
            "background": "center center/cover",
            "cursor": "pointer",
            //Test hover in the button here but failed
            "&&:hover $button": {
                "color": theme.palette.secondary.dark,
                "background": theme.palette.primary.dark,
                "border": `1px solid ${theme.palette.primary.dark}`,
                "filter": "none"
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
            "filter": "brightness(0.8)",
            "&:hover": {
                "filter": "brightness(1.05)"
            }
        },
        "button": {
            "zIndex": 1,
            "right": "10px",
            "alignSelf": "flex-end",
            "&:hover": {
                "color": theme.palette.secondary.dark,
                "background": theme.palette.primary.dark,
                "border": `1px solid ${theme.palette.primary.dark}`,
                "filter": "none"
            }
        }
    }))