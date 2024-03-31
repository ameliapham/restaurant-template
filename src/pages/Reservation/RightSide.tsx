import { tss } from 'tss-react/mui'
import Divider from '@mui/material/Divider'

import { InputForm } from '../../components/InputForm'


type PropsRightSide = {
    className?: string;
}

export function RightSide(props: PropsRightSide) {

    const { className } = props
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.objectHeading}>
                <Divider className={classes.divider}>
                    Reservation
                </Divider>
            </div>

            <p className={classes.text}>
                Book at ZenAsia for a captivating culinary adventure with Asia's finest flavors. Reserve now!
            </p>

            <InputForm />

        </div>

    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "boxSizing": "border-box",
            "gap": "50px",
            "borderRadius": "20px",
            "padding": "20px",
            "border": `1px solid ${theme.palette.secondary.light}`,
        },
        "objectHeading": {
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "fontFamily": theme.typography.fontFamily,
            "color": theme.palette.text.primary,
            "fontSize": theme.typography.body1.fontSize,
        },
        "divider": {
            "width": "82%",
        },
        "text": {
            "display": "flex",
            "textAlign": "center",
            "fontFamily": theme.typography.fontFamily,
            "color": theme.palette.text.primary,
            "fontSize": theme.typography.body2.fontSize,
            "fontWeight": theme.typography.body2.fontWeight,
            "margin": 0,
            "padding": 0,
        },
    }))