import { tss } from 'tss-react/mui'
import Fade from "@mui/material/Fade"

import { RightSide } from "./RightSide"
import { LeftSide } from "components/LeftSide"
import backgroundImageUrl from "assets/reservation2.webp"


type PropsReservation = {
    className?: string;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "reservation"

export function Reservation(props: PropsReservation) {

    const { cx, classes } = useStyles()

    const { onChangePage } = props

    return (
        <Fade
            in={true}
            timeout={800}
        >
            <div className={cx(classes.root)}>
                <LeftSide
                    selectedPage='reservation'
                    className={classes.left}
                    onChangePage={onChangePage}
                    backgroundImageUrl={backgroundImageUrl}
                    heroText={<>Book <br /> A Table </>}
                />
                <RightSide className={classes.right} />
            </div>
        </Fade>
    )
}

const useStyles = tss
    .withName("Reservation")
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