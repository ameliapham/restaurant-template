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
        "display": "flex",
        "gap": "10px",
        "padding": "10px",
        "border": `1px solid ${theme.palette.primary.main}`,
        "borderRadius": "20px",
    },
    "left": {
        "width": "70%",
    },
    "right": {
        "width": "30%",
    }
}));