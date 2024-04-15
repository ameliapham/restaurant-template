import { tss } from 'tss-react/mui'
import logo from 'assets/logoColor.svg'
import { Carousel } from './Carousel'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Map } from 'components/Map'
import Typography from '@mui/material/Typography';
import { declareComponentKeys } from "i18nifty"
import { useTranslation } from "i18n"


type PropsAboutDetail = {
    className?: string;
}

export function AboutDetail(props: PropsAboutDetail) {

    const { className } = props
    const { cx, classes } = useStyles()
    const { t } = useTranslation({ AboutDetail })

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.about}>
                <img
                    src={logo}
                    alt="logo"
                    className={classes.logo}
                />
                <Typography
                    variant="body2"
                    className={classes.describe}
                >
                    Just a short walk from the heart of Paris, our ZenAsia restaurant is the ideal spot for a lunch or dinner before exploring the city. ZenAsia offers a refreshing ambiance and authentic Asian flavours right in the centre of Europe. Our establishment features traditional sunken tables for a unique dining experience. We recommend booking these in advance, as they are highly sought after.
                </Typography>
            </div>

            <div className={classes.carousel}>
                <Carousel />
            </div>

            <div className={classes.info}>
                <div className={classes.infoDetail}>
                    <Typography
                        variant='body1'
                        className={classes.infoHeading}
                    >
                        Opening Times
                    </Typography>
                    <Typography
                        variant='body2'
                    >
                        Monday - Friday: 12:00 - 22:00
                        <br />
                        Saturday - Sunday: 10:00 - 23:00
                    </Typography>
                </div>

                <div className={classes.infoDetail}>
                    <Typography
                        variant='body1'
                        className={classes.infoHeading}
                    >
                        Find us
                    </Typography>

                    <Map
                        className={classes.map}
                        center={{
                            lat: 48.8477,
                            lng: 2.3446,
                        }}
                    />

                    <Typography
                        variant='body2'
                    >
                        3 Avenue Theophile Gautier, 75005 Paris
                        <br />
                        01 42 88 56 46
                    </Typography>
                </div>
            </div>

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

    )
}

const useStyles = tss
    .withName({ AboutDetail })
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "boxSizing": "border-box",
            "gap": theme.spacing(2),

            [theme.breakpoints.down('desktop')]: {
                "paddingTop": theme.spacing(2),
            },
        },
        "about": {
            "display": "flex",
            "gap": theme.spacing(3),
            "border": `1px solid ${theme.palette.secondary.light}`,
            "borderRadius": theme.spacing(2),
            "padding": theme.spacing(3),
            "alignItems": "flex-end",
            "justifyContent": "space-between",

            [theme.breakpoints.only('mobile')]: {
                "flexDirection": "column",
                "alignItems": "flex-start",
            },
        },
        "logo": {
            "flex": 1,
            "maxWidth": "200px",

        },
        "describe": {
            "margin": 0,
            "padding": 0,
            "width": "70%",
            "fontWeight": theme.typography.caption.fontWeight,

            [theme.breakpoints.only('tablet')]: {
                "width": "60%",
            },

            [theme.breakpoints.only('mobile')]: {
                "width": "100%",
            },
        },
        "carousel": {
            "flexGrow": 2,

            [theme.breakpoints.down('desktop')]: {
                "height": theme.spacing(40),
            },
        },
        "info": {
            "display": "flex",
            "flexDirection": "row",
            "gap": theme.spacing(2),
            "flexGrow": 1,

            [theme.breakpoints.down('desktop')]: {
                "height": theme.spacing(40),
            },
        },
        "infoHeading": {
            "color": theme.palette.secondary.dark,
        },
        "infoDetail": {
            "display": "flex",
            "flexDirection": "column",
            "gap": theme.spacing(2),
            "border": `1px solid ${theme.palette.secondary.light}`,
            "borderRadius": theme.spacing(2),
            "padding": theme.spacing(2),
            "flexGrow": 1,
            "overflow": "hidden",
        },
        "map": {
            "borderRadius": theme.spacing(2),
            [theme.breakpoints.only('mobile')]: {
                "display": "none",
            },
        },
        "social": {
            "display": "flex",
            "gap": theme.spacing(2),
            "justifyContent": "center",
            "alignItems": "center",
            "border": `1px solid ${theme.palette.secondary.light}`,
            "borderRadius": theme.spacing(2),
            "height": theme.spacing(6),
        },
        "icon": {
            "width": "25px",
            "height": "25px",
            "color": theme.palette.secondary.dark,
        },
    }))