import { tss } from 'tss-react/mui'
import { CustomButton } from './CustomButton'
import { alpha } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/icons-material/Menu'
import { useState } from 'react'
import { NavigationMenu } from './NavigationMenu'
import Drawer from '@mui/material/Drawer';
import { declareComponentKeys } from "i18nifty"
import { useTranslation } from "i18n"
import { restaurantDetails } from 'data/restaurantDetails'
import { useSelectedPage } from "useSelectedPage";

type PropsMenuBar = {
    className?: string;
}


export function AppBar(props: PropsMenuBar) {

    const { t } = useTranslation({ AppBar })
    const { className } = props
    const { cx, classes, theme } = useStyles()
    const { selectedPage, setSelectedPage } = useSelectedPage();

    const [openDrawer, setOpenDrawer] = useState(false)
    const toggleDrawer = (newOpenDrawer: boolean) => () => {
        setOpenDrawer(newOpenDrawer);
    };

    const { logoDark, logoLight } = restaurantDetails.logoUrl

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
                    onChangePage={setSelectedPage}
                />
            </Drawer>

            <img
                className={cx(classes.logo)}
                src={theme.palette.mode === 'dark' ? logoDark : logoLight}
                alt="logo"
                onClick={() => setSelectedPage("home")}
            />

            <CustomButton
                onClick={() => setSelectedPage("menu")}
                selected={selectedPage === "menu"}
                className={classes.button}
            >
                {t("menu")}
            </CustomButton>

            <CustomButton
                onClick={() => setSelectedPage("about")}
                selected={selectedPage === "about"}
                className={classes.button}
            >
                {t("about")}
            </CustomButton>

            <CustomButton
                onClick={() => setSelectedPage("reservation")}
                selected={selectedPage === "reservation"}
                className={classes.reservation}
            >
                {t("reservation")}
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

export const { i18n } = declareComponentKeys<
    | "menu"
    | "about"
    | "reservation"
>()({ AppBar });