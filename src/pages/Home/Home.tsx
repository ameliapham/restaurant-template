import { tss } from 'tss'
import Fade from "@mui/material/Fade"
import { useState, useEffect } from "react"

import { LeftSide } from "components/LeftSide"
import { RightSide } from "./RightSide"
import backgroundImageUrl from "assets/food-pho.webp"
import { breakpoints } from "theme";


type PropsHome = {
    className?: string;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "reservation"

export function Home(props: PropsHome) {

    const [checked, setChecked] = useState(false)

    const { onChangePage } = props

    const { cx, classes } = useStyles()

    useEffect(() => {
        setChecked(true)
    }, [])

    return (

            <div className={cx(classes.root)}>
                <LeftSide
                    selectedPage='home'
                    className={classes.left}
                    onChangePage={onChangePage}
                    backgroundImageUrl={backgroundImageUrl}
                    heroText={<>Zen <br /> Gourmet</>}
                />
                <RightSide
                    className={classes.right}
                    onChangePage={onChangePage}
                />
            </div>
    )
}

const useStyles = tss
    .withName("Home")
    .create(({ theme }) => ({
            "root": {
                "height": "100%",
                "gap": theme.spacing(2),
                "padding": theme.spacing(2),
                "boxSizing": "border-box",
                /*
                "border": (() => {

                    if (windowInnerWidth >= breakpoints.values.desktop) {
                        return "1px solid red";
                    }

                    if (windowInnerWidth >= breakpoints.values.tablet) {
                        return "1px solid green"
                    }

                    return "10px solid blue"

                })(),
                */
                "display": "flex",
                [theme.breakpoints.only("mobile")]: {
                    "display": "block",
                    "overflow": "auto"
                },
                /*
                [theme.breakpoints.only("desktop")]: {
                    "border": "1px solid red",
                },
                [theme.breakpoints.only("tablet")]: {
                    "border": "1px solid green",
                },
                [theme.breakpoints.only("mobile")]: {
                    "border": "1px solid blue",
                },
                */

            },
            "left": {
                "width": "75%",
                [theme.breakpoints.only("mobile")]: {
                    "width": "unset",
                    "height": 400,
                },
            },
            "right": {
                "flex": 1,
                [theme.breakpoints.only("mobile")]: {
                    "flex": "unset",
                },
            },
    }));