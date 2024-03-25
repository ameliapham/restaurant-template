import { tss } from 'tss-react/mui'

import { RightSide } from "./RightSide"
import { LeftSide } from "./LeftSide"


export function Menu() {

    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root)}>
            <LeftSide className={classes.left}/>
            <RightSide className={classes.right}/>
        </div>
    )
}

const useStyles = tss.create(({ theme }) => ({
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