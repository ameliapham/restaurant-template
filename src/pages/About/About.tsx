import { tss } from 'tss'
import Fade from "@mui/material/Fade"

import { DesignOfAboutPage } from "./DesignOfAboutPage"
import { HeroSection } from "components/HeroSection"
import backgroundImageUrl from "assets/resto4.webp"
import { declareComponentKeys } from "i18nifty"
import { useTranslation } from "i18n"



export function About() {

    const { cx, classes } = useStyles()

    const { t } = useTranslation({ About })

    return (
        <Fade
            in={true}
            timeout={800}
        >
            <div className={cx(classes.root)}>
                <HeroSection
                    className={classes.left}
                    backgroundImageUrl={backgroundImageUrl}
                    heroText={
                        <>
                            {t("about")}
                        </>
                    }
                />
                <DesignOfAboutPage className={classes.right} />
            </div>
        </Fade>
    )
}

const useStyles = tss
    .withName({ About })
    .create(({ theme, scrollbarStyles }) => ({
        "root": {
            "display": "flex",
            "gap": theme.spacing(2),
            "padding": theme.spacing(2),
            "height": "100%",
            "boxSizing": "border-box",

            [theme.breakpoints.down('desktop')]: {
                "display": "block",
                "overflow": "auto",
                ...scrollbarStyles,
            },
        },
        "left": {
            "width": "60%",

            [theme.breakpoints.only('tablet')]: {
                "width": "unset",
                "height": theme.spacing(80),
            },

            [theme.breakpoints.only("mobile")]: {
                "width": "unset",
                "height": theme.spacing(40),
            },
        },
        "right": {
            "flex": 1,
        }
    }));

export const { i18n } = declareComponentKeys<
    | "about"
>()({ About });