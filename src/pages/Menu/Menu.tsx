import { tss } from 'tss-react/mui'

import { RightSide } from "./RightSide"
import { LeftSide } from "./LeftSide"

type PropsMenu = {
    className?: string;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "book"

export function Menu(props: PropsMenu) {

    const { cx, classes } = useStyles()
    const { onChangePage } = props

    return (
        <div className={cx(classes.root)}>
            <LeftSide 
                className={classes.left}
                onChangePage={onChangePage}
            />
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