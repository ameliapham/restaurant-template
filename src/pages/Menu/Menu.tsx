import { tss } from 'tss-react/mui'
import Fade from "@mui/material/Fade"

import { RightSide } from "./RightSide"
import { LeftSide } from "components/LeftSide"
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
                <LeftSide
                    selectedPage='menu'
                    className={classes.left}
                    onChangePage={onChangePage}
                    backgroundImageUrl={backgroundImageUrl}
                    heroText={<>Menu</>}
                />
                <RightSide className={classes.right} />
            </div>
        </Fade>
    )
}

const useStyles = tss
    .withName("Menu")
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "flexGrow": 1,
            "gap": theme.spacing(2),
            "margin": theme.spacing(2),
        },
        "left": {
            "width": "60%",
        },
        "right": {
            "width": "40%",
        }
    }));