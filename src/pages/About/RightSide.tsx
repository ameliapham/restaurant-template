import { tss } from 'tss-react/mui'
import { alpha } from '@mui/material/styles'
import logo from '../../assets/logoColor.svg'
import { Carousel } from './Carousel'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Map } from '../../components/Map'


type PropsRightSide = {
    className?: string;
}

export function RightSide(props: PropsRightSide) {

    const { className } = props
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.about}>
                <img
                    src={logo}
                    alt="logo"
                />
                <p className={classes.describe}>
                    Just a short walk from the heart of Paris, our ZenAsia restaurant is the ideal spot for a lunch or dinner before exploring the city. ZenAsia offers a refreshing ambiance and authentic Asian flavours right in the centre of Europe. Our establishment features traditional sunken tables for a unique dining experience. We recommend booking these in advance, as they are highly sought after.
                </p>
            </div>

            <div className={classes.carousel}>
                <Carousel />
            </div>

            <div className={classes.info}>
                <div className={classes.times}>
                    <p className={classes.infoHeading}>Opening Times</p>
                    <p>Monday - Friday: 12:00 - 22:00</p>
                    <p>Saturday - Sunday: 10:00 - 23:00</p>
                </div>

                <div className={classes.address}>
                    <p className={classes.infoHeading}>Find us</p>
                    <Map 
                        className={classes.map}
                        center={{
                            lat: 48.8477,
                            lng: 2.3446,
                        }}
                    />
                    <p>3 Avenue Theophile Gautier, 75005 Paris</p>
                    <p>01 42 88 56 46</p>
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
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "boxSizing": "border-box",
            "gap": "20px",
            "borderRadius": "20px",
        },
        "about": {
            "display": "flex",
            "gap": "20px",
            "fontFamily": theme.typography.fontFamily,
            "fontSize": theme.typography.body2.fontSize,
            "fontWeight": theme.typography.body2.fontWeight,
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.2)}`,
            "borderRadius": "15px",
            "overflow": "hidden",
            "padding": "20px",
            "alignItems": "flex-end",
            "justifyContent": "space-between",
        },
        "describe": {
            "margin": 0,
            "padding": 0,
        },
        "carousel": {
            "flexGrow": 2,
        },
        "info": {
            "display": "flex",
            "flexDirection": "row",
            "gap": "20px",
            "width": "100%",
            "flexGrow": 1,
        },
        "times": {
            "fontFamily": theme.typography.fontFamily,
            "fontSize": theme.typography.body2.fontSize,
            "fontWeight": theme.typography.body2.fontWeight,
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.2)}`,
            "borderRadius": "15px",
            "padding": "10px 20px 10px 20px",
            "flexGrow": 1,
        },
        "address": {
            "fontFamily": theme.typography.fontFamily,
            "fontSize": theme.typography.body2.fontSize,
            "fontWeight": theme.typography.body2.fontWeight,
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.2)}`,
            "borderRadius": "15px",
            "padding": "10px 20px 10px 20px",
            "flexGrow": 1,
            "overflow": "hidden",
        },
        "map": {
            "width": "100%",
            "maxHeight": "200px",
            "borderRadius": "15px",
        },
        "infoHeading": {
            "fontFamily": theme.typography.fontFamily,
            "fontSize": theme.typography.body1.fontSize,
            "fontWeight": theme.typography.body1.fontWeight,
            "color": theme.palette.secondary.dark,
        },
        "social": {
            "display": "flex",
            "gap": "10px",
            "justifyContent": "center",
            "alignItems": "center",
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.2)}`,
            "borderRadius": "12px",
            "height": "40px",
        },
        "icon": {
            "width": "25px",
            "height": "25px",
            "color": theme.palette.secondary.dark,
        },
    }))