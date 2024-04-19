//import { useState } from "react";
import { tss } from 'tss-react/mui'
//import Divider from '@mui/material/Divider'
import { alpha } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

//import { ReservationForm, getIsFormSubmittable, type FormData } from 'pages/Reservation/ReservationForm'
//import { CustomButton } from 'components/CustomButton'
import { declareComponentKeys } from "i18nifty"
import { useTranslation } from "i18n"
//import { restaurantDetails } from "data/restaurantDetails";
import { ReservationForm2 } from "./ReservationForm copy";

type PropsDesignOfReservationPage = {
    className?: string;
}

export function DesignOfReservationPage(props: PropsDesignOfReservationPage) {

    const { className } = props
    const { cx, classes } = useStyles()
    const { t } = useTranslation({ DesignOfReservationPage })
    /*
    const [formData, setFormData] = useState<FormData>({
        name: 'Joseph Garrone',
        email: 'joseph.garrone@protonmail.com',
        phoneNumber: '06 12 34 56 78',
        numberOfGuests: 1,
        time: "",
        specialRequests: '',
    });
    */

    return (
        <div className={cx(classes.root, className)}>

            <div className={classes.objectHeading}>
                <Typography
                    variant="h6"
                >
                    {t("reservation")}
                </Typography>
            </div>

            <Typography
                variant="body2"
                className={classes.text}
            >
                {t("punchline")}
            </Typography>

            <ReservationForm2 />

            {/*
            <ReservationForm 
                className={classes.inputForm} 
                formData={formData}
                onFormDataChange={formData => {
                    setFormData(formData);
                }}
            />

            <CustomButton
                className={classes.reservation}
                disabled={!getIsFormSubmittable(formData)}
                onClick={() => {

                    fetch("https://restaurant-form-email.deno.dev/", {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            formData,
                            restaurantDetails
                        })
                    })
                    .then(response => response.text())
                    .then(data => {
                        console.log(data);

                        alert("Your reservation has been sent to the restaurant, you will receive a confirmation email shortly.");

                    });

                }}
            >
                {t("reserve now")}
            </CustomButton>
            */}

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

export const { i18n } = declareComponentKeys<
    | "reservation"
    | "punchline"
    | "reserve now"
>()({ DesignOfReservationPage })