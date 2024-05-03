import { tss } from 'tss'
import Fade from "@mui/material/Fade"

import { DesignOfMenuPage } from "./DesignOfMenuPage"
import { HeroSection } from "components/HeroSection"
import backgroundImageUrl from "assets/food-nem.webp"
import { declareComponentKeys } from "i18nifty"
import { useTranslation } from "i18n"
import { useHeight } from "hooks/useHeightContext"

export function Menu() {
    
    const { height } = useHeight()
    const { cx, classes } = useStyles({height})
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
    .withParams<{ height: number }>()
    .create(({ theme, scrollbarStyles, height }) => ({
        "root": {
            "display": "flex",
            "gap": theme.spacing(2),
            "padding": theme.spacing(2),
            "boxSizing": "border-box",
            "height": "100%",

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
                "height": height,
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