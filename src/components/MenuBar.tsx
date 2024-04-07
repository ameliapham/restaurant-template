import { tss } from 'tss-react/mui'
import { CustomButton } from './CustomButton'
import logo from '../assets/logo.svg'
import { alpha } from '@mui/material/styles'

type PropsMenuBar = {
    className?: string;
    selectedPage: SelectedPage;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "reservation"

export function MenuBar(props: PropsMenuBar) {

    const { className, onChangePage } = props
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <img
                className={cx(classes.logo)}
                src={logo}
                alt="logo"
                onClick={() => onChangePage("home")}
            />
            <CustomButton
                onClick={() => onChangePage("menu")}
                selected={props.selectedPage === "menu"}
            >
                Menu
            </CustomButton>
            <CustomButton
                onClick={() => onChangePage("about")}
                selected={props.selectedPage === "about"}
            >
                About
            </CustomButton>
            <CustomButton
                onClick={() => onChangePage("reservation")}
                selected={props.selectedPage === "reservation"}
                className={classes.reservation}
            >
                Book a table
            </CustomButton>
        </div>
    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "boxSizing": "border-box",
            "display": "inline-flex",
            "justifyContent": "center",
            "gap": theme.spacing(1.2),
            "padding": "5px 5px 5px 15px",
            "border": `1px solid ${theme.palette.primary.main}`,
            "borderRadius": theme.spacing(1),
            "background": theme.palette.primary.dark,
            "alignItems": "center",
            "alignSelf": "flex-start",
        },
        "logo": {
            "width": theme.spacing(10),
            "cursor": "pointer",
        },
        "reservation": {
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.5)}`,
        }
    }))