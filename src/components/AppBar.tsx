import { tss } from 'tss-react/mui'
import { CustomButton } from './CustomButton'
import logoDark from 'assets/logoDark.svg'
import logoLight from 'assets/logoLight.svg'
import { alpha } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/icons-material/Menu'
import { useState } from 'react'
import { NavigationMenu } from './NavigationMenu'


type PropsMenuBar = {
    className?: string;
    selectedPage: SelectedPage;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "reservation"

export function AppBar(props: PropsMenuBar) {

    const { className, onChangePage } = props
    const { cx, classes, theme } = useStyles()
    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <div className={cx(classes.root, className)}>
            <IconButton
                className={classes.menuButton}
                color="inherit"
                onClick={() => setOpenDrawer(true)}
            >
                <Menu />
            </IconButton>

            <NavigationMenu open={openDrawer} />

            <img
                className={cx(classes.logo)}
                src={theme.palette.mode === 'dark' ? logoDark : logoLight}
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
            "gap": theme.spacing(1),
            "padding": "5px 5px 5px 5px",
            "border": `1px solid ${theme.palette.primary.main}`,
            "borderRadius": theme.spacing(1),
            "background": theme.palette.primary.dark,
            "alignItems": "center",
            "alignSelf": "flex-start",
        },
        "menuButton": {
            "border": `1px solid ${theme.palette.secondary.light}`,
            "borderRadius": "4px",
            "padding": theme.spacing(0.6),

        },
        "logo": {
            "width": theme.spacing(10),
            "cursor": "pointer",
            "padding": "0 0 0 10px",
        },
        "reservation": {
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.5)}`,
        }
    }))