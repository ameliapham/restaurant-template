import { tss } from 'tss-react/mui'
import Fade from "@mui/material/Fade"
import { useState, useEffect } from "react"

import { LeftSide } from "./LeftSide"
import { RightSide } from "./RightSide"

type PropsHome = {
    className?: string;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "book"

export function Home(props: PropsHome) {

    const [checked, setChecked] = useState(false)

    const { onChangePage } = props

    const { cx, classes } = useStyles()

    useEffect(() => {
        setChecked(true)
    }, [])

    return (
        <Fade
            in={checked}
            timeout={800}
        >
            <div className={cx(classes.root)}>
                <LeftSide
                    className={classes.left}
                    onChangePage={onChangePage}
                />
                <RightSide 
                    className={classes.right} 
                    onChangePage={onChangePage}
                />
            </div>
        </Fade>
    )
}

const useStyles = tss.create(({ }) => ({
    "root": {
        "display": "flex",
        "flexGrow": 1,
        "gap": "20px",
        "borderRadius": "20px",
        "margin": "30px",
    },
    "left": {
        "width": "75%",
    },
    "right": {
        "width": "25%",
    }
}));