import { tss } from 'tss-react/mui'

import { LeftSide } from "./LeftSide"
import { RightSide } from "./RightSide"


export function AllTogether() {

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
        "boxSizing": "border-box",
        "display": "flex",
        "gap": "10px",
        "borderRadius": "20px",
    },
    "left": {
        "width": "70%",
    },
    "right": {
        "width": "30%",
    }
}));