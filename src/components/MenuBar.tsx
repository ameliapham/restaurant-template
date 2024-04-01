import { tss } from 'tss-react/mui'
import { CustomButton } from './CustomButton'
import logo from '../assets/logo.svg'
import { alpha } from '@mui/material/styles'
import { DarkModeSwitch } from "theme";
import { useFoo } from "tools/useFoo";

type PropsMenuBar = {
    className?: string;
    selectedPage?: "home" | "menu" | "about" | "reservation";
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "reservation"

export function MenuBar(props: PropsMenuBar) {

    const { className, onChangePage } = props
    const { cx, classes } = useStyles()
    const { setFoo } = useFoo();

    return (
        <div 
        className={cx(classes.root, className)}
        onMouseEnter={() => setFoo("Hello!!!!")}
        >
            <img
                className={cx(classes.logo)}
                src={logo}
                alt="logo"
                onClick={() => onChangePage("home")}
            />
            <CustomButton
                onClick={() => onChangePage("menu")}
            >
                Menu
            </CustomButton>
            <CustomButton
                onClick={() => onChangePage("about")}
            >
                About
            </CustomButton>
            <CustomButton
                onClick={() => onChangePage("reservation")}
                className={classes.reservation}
            >
                Book a table
            </CustomButton>
            <DarkModeSwitch />
        </div>
    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "boxSizing": "border-box",
            "display": "inline-flex",
            "justifyContent": "center",
            "gap": "10px",
            "padding": "5px 15px 5px 15px",
            "border": `1px solid ${theme.palette.primary.main}`,
            "borderRadius": "10px",
            "background": theme.palette.primary.dark,
            "alignItems": "center",
            "alignSelf": "flex-start",
        },
        "logo": {
            "width": "80px",
            "cursor": "pointer",
        },
        "reservation": {
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.5)}`,
        }
    }))