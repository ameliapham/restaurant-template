import { tss } from 'tss-react/mui'
import Fade from "@mui/material/Fade"
import { useState, useEffect } from "react"
import { HeroSection } from "components/HeroSection"
import { DesignOfHomePage } from "./DesignOfHomePage"
import backgroundImageUrl from "assets/food-pho.webp"
import { useHeight } from "hooks/useHeightContext"
import { useDomRect } from "powerhooks/useDomRect"


export function Home() {

    const { ref, domRect: { height } } = useDomRect()
    const { setHeight } = useHeight()

    useEffect(()=>{
        setHeight(height);
    }, [height]);


    const [checked, setChecked] = useState(false)

    const { classes } = useStyles()

    useEffect(() => {
        setChecked(true)
    }, [])

    return (
        <Fade
            in={checked}
            timeout={800}
        >
            <div className={classes.root}>
                <HeroSection
                    ref={ref}
                    className={classes.left}
                    backgroundImageUrl={backgroundImageUrl}
                    heroText={<>Zen <br /> Gourmet</>}
                />
                <DesignOfHomePage
                    className={classes.right}
                />
            </div>
        </Fade>
    )
}

const useStyles = tss
    .withName({ Home })
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "gap": theme.spacing(2),
            "padding": theme.spacing(2),
            "boxSizing": "border-box",
            "height": "100%",

            [theme.breakpoints.only('tablet')]: {
                "flexDirection": "column",
                "height": "100vh",
            },

            [theme.breakpoints.only("mobile")]: {
                "display": "block",
                "height": "unset",
            },
        },
        "left": {
            "width": "75%",

            [theme.breakpoints.only('tablet')]: {
                "width": "unset",
                "height": "70%",
            },

            [theme.breakpoints.only("mobile")]: {
                "width": "unset",
                "height": theme.spacing(40),
            },
        },
        "right": {
            "flex": "1",
        },
    }));