import { tss } from 'tss-react/mui'
import Fade from "@mui/material/Fade"

import { RightSide } from "./RightSide"
import { LeftSide } from "components/LeftSide"
import backgroundImageUrl from "assets/resto4.webp"


type PropsAbout = {
    className?: string;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "reservation"

export function About(props: PropsAbout) {

    const { cx, classes } = useStyles()

    const { onChangePage } = props

    return (
        <Fade
            in={true}
            timeout={800}
        >
            <div className={cx(classes.root)}>
                <LeftSide
                    selectedPage='about'
                    className={classes.left}
                    onChangePage={onChangePage}
                    backgroundImageUrl={backgroundImageUrl}
                    heroText={<>About</>}
                />
                <RightSide className={classes.right} />
            </div>
        </Fade>
    )
}

const useStyles = tss
    .withName("About")
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "gap": theme.spacing(2),
            "padding": theme.spacing(2),
            "height": "100%",
            "boxSizing": "border-box",

            [theme.breakpoints.only('tablet')]: {
                "display": "block",  
                //"flexDirection": "column",
                //"height": "unset",
                "overflow": "auto",
            },


        },
        "left": {
            "width": "60%",

            [theme.breakpoints.only('tablet')]: {
                "width": "unset",
                "height": "70%",
            },
        },
        "right": {
            "flex": 1,

            [theme.breakpoints.only('tablet')]: {
                "flex": "unset",
            },
        }
    }));