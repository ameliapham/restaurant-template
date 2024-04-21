import { tss } from 'tss-react/mui'
import Fade from "@mui/material/Fade"

import { DesignOfMenuPage } from "./DesignOfMenuPage"
import { HeroSection } from "components/HeroSection"
import backgroundImageUrl from "assets/food-nem.webp"
import { declareComponentKeys } from "i18nifty"
import { useTranslation } from "i18n"


export function Menu() {

    const { cx, classes } = useStyles()
    const { t } = useTranslation({ Menu })

    return (
        <Fade
            in={true}
            timeout={800}
        >
            <div className={cx(classes.root)}>
                <HeroSection
                    className={classes.left}
                    backgroundImageUrl={backgroundImageUrl}
                    heroText={<>
                        {t("menu")}
                    </>}
                />
                <DesignOfMenuPage className={classes.right} />
            </div>
        </Fade>
    )
}

const useStyles = tss
    .withName({ Menu })
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "gap": theme.spacing(2),
            "padding": theme.spacing(2),
            "boxSizing": "border-box",
            "height": "100%",

            [theme.breakpoints.down('desktop')]: {
                "display": "block",
                "overflow": "auto",
            },
        },
        "left": {
            "width": "60%",

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
            "flex": 1,
        }
    }));

export const { i18n } = declareComponentKeys<
    | "menu"
>()({ Menu });