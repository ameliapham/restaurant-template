import { tss } from 'tss-react/mui'
import Fade from "@mui/material/Fade"

import { RightSide } from "./RightSide"
import { LeftSide } from "./LeftSide"

type PropsReservation = {
    className?: string;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "book"

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
                    className={classes.left}
                    onChangePage={onChangePage}
                />
                <RightSide className={classes.right} />
            </div>
        </Fade>
    )
}

const useStyles = tss.create(({}) => ({
    "root": {
        "display": "flex",
        "flexGrow": 1,
        "gap": "20px",
        "borderRadius": "20px",
        "margin": "30px",
    },
    "left": {
        "width": "60%",
    },
    "right": {
        "width": "40%",
    }
}));