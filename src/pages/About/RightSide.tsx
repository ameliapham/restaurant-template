import { tss } from 'tss-react/mui'
import { alpha } from '@mui/material/styles'
import logo from '../../assets/logo.svg'


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
                    className={cx(classes.logo)}
                    src={logo}
                    alt="logo"
                />
                <h6>
                    Just a short walk from the heart of Paris, our ZenAsia restaurant is the ideal spot for a lunch or dinner before exploring the city. ZenAsia offers a refreshing ambiance and authentic Asian flavours right in the centre of Europe. Our establishment features traditional sunken tables for a unique dining experience. We recommend booking these in advance, as they are highly sought after.
                </h6>
            </div>

            <div className={classes.carousel}>

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
            "gap": "40px",
            "borderRadius": "20px",
            "padding": "20px",
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.2)}`,
        },
        "button": {
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.5)}`,
        },
    }))