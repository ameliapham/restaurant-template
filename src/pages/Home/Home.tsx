import { tss } from 'tss-react/mui'

import { LeftSide } from "./LeftSide"
import { RightSide } from "./RightSide"

type PropsHome = {
    className?: string;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "book"

export function Home(props: PropsHome) {

    const { className, onChangePage } = props

    const { cx, classes } = useStyles()

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
        "width": "75%",
    },
    "right": {
        "width": "25%",
    }
}));