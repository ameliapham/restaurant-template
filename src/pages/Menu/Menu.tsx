import { tss } from 'tss-react/mui'
import Fade from "@mui/material/Fade"

import { DesignOfMenuPage } from "./DesignOfMenuPage"
import { HeroSection } from "components/HeroSection"
import backgroundImageUrl from "assets/food-nem.webp"


type PropsMenu = {
    className?: string;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "reservation"

export function Menu(props: PropsMenu) {

    const { cx, classes } = useStyles()
    const { onChangePage } = props

    return (
        <Fade
            in={true}
            timeout={800}
        >
            <div className={cx(classes.root)}>
                <HeroSection
                    selectedPage='menu'
                    className={classes.left}
                    onChangePage={onChangePage}
                    backgroundImageUrl={backgroundImageUrl}
                    heroText={<>Menu</>}
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