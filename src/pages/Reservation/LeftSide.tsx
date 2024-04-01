//import { darkTheme } from "../../theme"
import { tss } from 'tss-react/mui'
import { MenuBar } from '../../components/MenuBar';
import Typography from '@mui/material/Typography';

import backgroundImage from "../../assets/reservation2.webp"


type PropsLeftSide = {
    className?: string;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "reservation"

export function LeftSide(props: PropsLeftSide) {

    const { className, onChangePage } = props
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>

            <MenuBar onChangePage={onChangePage}/>

            <div style={{ border: "1px solid red" }}>
                <Typography variant="h1">
                    Book
                </Typography>
                <Typography variant="h2">
                    A Table
                </Typography>
            </div>

        </div >
    )
}

const useStyles = tss
    .create(() => ({
        "root": {
            "boxSizing": "border-box",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "space-between",
            "background": `url(${backgroundImage}) center center/cover`,
            "borderRadius": "15px",
            "padding": "30px 50px 30px 50px",
        },
    }))