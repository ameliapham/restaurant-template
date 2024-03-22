import { tss } from 'tss-react/mui'
import { CustomButton } from './CustomButton'
import logo from '../assets/logo.svg'
import { alpha } from '@mui/material/styles'

type PropsMenuBar = {
    className?: string;
}

export function MenuBar(props: PropsMenuBar) {

    const { className } = props
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <img className={cx(classes.logo)} src={logo} alt="logo" />
            <CustomButton
                onHover={() => { console.log("hover") }}
                onClick={() => { console.log("click") }}
            >
                Menu
            </CustomButton>
            <CustomButton
                onHover={() => { console.log("hover") }}
                onClick={() => { console.log("click") }}
            >
                About
            </CustomButton>
            <CustomButton
                onHover={() => { console.log("hover") }}
                onClick={() => { console.log("click") }}
                className={classes.bookTable}
            >
                Book a table
            </CustomButton>
        </div>
    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "display": "inline-flex",
            "justifyContent": "center",
            "gap": "10px",
            "padding": "5px 15px 5px 15px",
            "border": `1px solid ${theme.palette.primary.main}`,
            "borderRadius": "10px",
            "background": theme.palette.primary.dark,
            "alignItems": "center",
        },
        "logo": {
            "width": "80px",
            "cursor": "pointer",
        },
        "bookTable": {
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.5)}`,
        }
    }))