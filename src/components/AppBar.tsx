import { tss } from 'tss-react/mui'
import { CustomButton } from './CustomButton'
import logoDark from 'assets/logoDark.svg'
import logoLight from 'assets/logoLight.svg'
import { alpha } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/icons-material/Menu'
import { useState } from 'react'
import { NavigationMenu } from './NavigationMenu'
import Drawer from '@mui/material/Drawer';


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
    const toggleDrawer = (newOpenDrawer: boolean) => () => {
        setOpenDrawer(newOpenDrawer);
    };

    return (
        <div className={cx(classes.root, className)}>
            <IconButton
                className={classes.menuButton}
                onClick={toggleDrawer(true)}
            >
                <Menu />
            </IconButton>

            <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
                <NavigationMenu
                    onCLick={toggleDrawer(false)}
                    onChangePage={onChangePage}
                />
            </Drawer>

            <img
                className={cx(classes.logo)}
                src={theme.palette.mode === 'dark' ? logoDark : logoLight}
                alt="logo"
                onClick={() => onChangePage("home")}
            />

            <CustomButton
                onClick={() => onChangePage("menu")}
                selected={props.selectedPage === "menu"}
                className={classes.button}
            >
                Menu
            </CustomButton>

            <CustomButton
                onClick={() => onChangePage("about")}
                selected={props.selectedPage === "about"}
                className={classes.button}
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
            "display": "flex",
            "justifyContent": "center",
            "gap": theme.spacing(1),
            "padding": theme.spacing(0.8),
            "border": `1px solid ${theme.palette.primary.main}`,
            "borderRadius": theme.spacing(1),
            "background": theme.palette.primary.dark,
            "alignItems": "center",

            [theme.breakpoints.only('desktop')]: {
                "alignSelf": "flex-start",
            },
        },
        "menuButton": {
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.5)}`,
            "borderRadius": "4px",
            "padding": theme.spacing(0.6),
            "transition": "background 0.4s ease-in-out, border 0.4s ease-in-out, color 0.4s ease-in-out",
        },
        "logo": {
            "width": theme.spacing(10),
            "cursor": "pointer",
            "padding": `0 ${theme.spacing(1)}`,
            "color": theme.palette.text.secondary,
        },
        "button": {
            [theme.breakpoints.only('mobile')]: {
                "display": "none",
            },
        },
        "reservation": {
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.5)}`,
        }
    }))