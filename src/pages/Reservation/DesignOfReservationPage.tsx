import { tss } from 'tss-react/mui'
//import Divider from '@mui/material/Divider'
import { alpha } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import { ReservationForm } from 'pages/Reservation/ReservationForm'
import { CustomButton } from 'components/CustomButton'

type PropsDesignOfReservationPage = {
    className?: string;
}

export function DesignOfReservationPage(props: PropsDesignOfReservationPage) {

    const { className } = props
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>
           
           <div className={classes.objectHeading}>
                

                    <Typography
                        variant="h6"
                    >
                        Reservation
                    </Typography>

                

            </div>

            <Typography
                variant="body2"
                className={classes.text}
            >
                Book at ZenAsia for a captivating culinary adventure with Asia's finest flavors. Reserve now!
            </Typography>

            <ReservationForm className={classes.inputForm} />

            <CustomButton
                className={classes.reservation}
            >
                Reserve now
            </CustomButton>

        </div>

    )
}

const useStyles = tss
    .withName({ DesignOfReservationPage })
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "boxSizing": "border-box",
            "gap": theme.spacing(5),
            "alignItems": "center",
            "borderRadius": theme.spacing(2),
            "padding": `${theme.spacing(10)} ${theme.spacing(3)}`,
            "border": `1px solid ${theme.palette.secondary.light}`,
            "overflow": "hidden",
            "justifyContent": "center",
            
            [theme.breakpoints.down('desktop')]: {
                "marginTop": theme.spacing(2),
            },
        },
        "objectHeading": {
            "color": theme.palette.secondary.dark,
            "textTransform": "uppercase",
        },
        "text": {
            "display": "flex",
            "textAlign": "center",
            "justifyContent": "center",
            "margin": 0,
            "padding": 0,
        },
        "inputForm": {
            "width": "100%",
        },
        "reservation": {
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.5)}`,
        }
    }))