import { ReactNode } from 'react'
import { tss } from 'tss-react/mui'
import Typography from '@mui/material/Typography'
import { AppBar } from 'components/AppBar';

type PropsLeftSide = {
    className?: string;
    backgroundImageUrl: string;
    heroText: ReactNode;
    selectedPage: "home" | "menu" | "about" | "reservation";
    onChangePage: (page: "home" | "menu" | "about" | "reservation") => void;
}

export function LeftSide(props: PropsLeftSide) {

    const { className, backgroundImageUrl, heroText, selectedPage, onChangePage } = props
    const { cx, classes } = useStyles({ backgroundImageUrl })

    return (
        <div className={cx(classes.root, className)}>
            <AppBar
                selectedPage={selectedPage}
                onChangePage={onChangePage}
            />

            <Typography
                variant='h1'
                className={classes.heroText}
            >
                {heroText}
            </Typography>

        </div >
    )
}

const useStyles = tss
    .withName({ LeftSide })
    .withParams<{ backgroundImageUrl: string }>()
    .create(({ theme, backgroundImageUrl }) => ({
        "root": {
            "boxSizing": "border-box",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "space-between",
            "background": `url(${backgroundImageUrl}) center center/cover`,
            "borderRadius": theme.spacing(2),
            "color": "#f6edde",
            "overflow": "hidden",
            
            [theme.breakpoints.only('desktop')]: {
                "padding": "30px 50px 30px 50px",
            },

            [theme.breakpoints.down("desktop")]: {
               "padding": "30px 0 30px 0",
               "alignItems": "center",
            },
        },
        "heroText": {
            
            [theme.breakpoints.only('tablet')]: {
                "textAlign": "center",
            },

            [theme.breakpoints.only("mobile")]: {
                "textAlign": "center",
                "fontSize": theme.typography.h2.fontSize,
            },
        }
    }))