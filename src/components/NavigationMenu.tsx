import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { tss } from 'tss-react/mui';
import { declareComponentKeys } from "i18nifty"
import { useTranslation } from "i18n"

import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';
import { DarkModeSwitch } from 'theme/DarkModeSwitch';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { alpha } from '@mui/material/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

type PropsDrawerList = {
    className?: string;
    onCLick?: () => void;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "reservation"

export function NavigationMenu(props: PropsDrawerList) {
    const { onCLick, onChangePage } = props
    const { classes, theme } = useStyles()
    const { t } = useTranslation({ NavigationMenu })

    const DrawerList = (
        <Box
            role="presentation"
            className={classes.drawer}
        >
            <div className={classes.container}>
                <List className={classes.head}>
                    <IconButton
                        className={classes.closeButton}
                        onClick={onCLick}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DarkModeSwitch />
                </List>

                <List>
                    {['home', 'menu', 'about', 'reservation'].map((text) => (
                        <ListItem key={text} disablePadding >
                            <ListItemButton className={classes.text}>
                                <Typography
                                    variant="h1"
                                    fontSize={theme.typography.h3.fontSize}
                                    onClick={() => onChangePage(text as SelectedPage)}
                                >
                                    {text}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <div className={classes.social}>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" >
                        <FacebookIcon className={classes.icon} />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" >
                        <InstagramIcon className={classes.icon} />
                    </a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                        <TwitterIcon className={classes.icon} />
                    </a>
                </div>

            </div>
        </Box>
    );

    return DrawerList;
}

const useStyles = tss
    .withName("NavigationMenu")
    .create(({ theme }) => ({
        "drawer": {
            "height": "100vh",
            "width": "100vw",
            "background": theme.palette.primary.dark,
            "padding": theme.spacing(2),
            "boxSizing": "border-box",
            "overflow": "hidden",
        },
        "container": {
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "space-between",
            "height": "100%",
            "boxSizing": "border-box",
            "borderRadius": theme.spacing(2),
            "border": `1px solid ${theme.palette.secondary.light}`,
        },
        "head": {
            "display": "flex",
            "justifyContent": "space-between",
            "borderBottom": `1px solid ${alpha(theme.palette.secondary.light, 0.2)}`,
            "alignItems": "center",
            "margin": `${theme.spacing(3)} ${theme.spacing(7)} 0 ${theme.spacing(7)}`,
        },
        "closeButton": {
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.5)}`,
            "borderRadius": "4px",
            "padding": theme.spacing(0.6),
            "transition": "background 0.4s ease-in-out, border 0.4s ease-in-out, color 0.4s ease-in-out",

        },
        "text": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "fontSize": theme.typography.h4.fontSize,
        },
        "social": {
            "display": "flex",
            "gap": theme.spacing(3),
            "justifyContent": "center",
            "alignItems": "center",
            "borderTop": `1px solid ${alpha(theme.palette.secondary.light, 0.2)}`,
            "height": theme.spacing(6),
            "margin": `0 ${theme.spacing(7)} 0 ${theme.spacing(7)}`,
        },
        "icon": {
            "width": "25px",
            "height": "25px",
            "color": theme.palette.secondary.main,
        },
    }));


export const { i18n } = declareComponentKeys<
    | "home"
    | "menu"
    | "reservation"
    | "about"
>()({ NavigationMenu });


