import { tss } from 'tss-react/mui'
import { CustomTextField } from '../../components/CustomTextField'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { declareComponentKeys } from "i18nifty"
import { useTranslation } from "i18n"

type PropsInputForm = {
    className?: string;
}

export function ReservationForm(props: PropsInputForm) {

    const { className } = props
    const { cx, classes, theme } = useStyles()
    const { t } = useTranslation({ ReservationForm })

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.line}>
                <CustomTextField
                    label={t("your name")}
                    required
                />
                <CustomTextField
                    label={t("email")}
                    required
                />
            </div>

            <div className={classes.line}>
                <CustomTextField
                    label={t("phone number")}
                    required
                />
                <CustomTextField
                    label={t("number of guests")}
                    type='number'
                    required
                />
            </div>

            <div className={classes.line}>
                <CustomTextField
                    label={t("date")}
                    type='date'
                    required
                />
                <CustomTextField
                    label={t("time")}
                    type='time'
                    required
                />
            </div>

            <CustomTextField
                label={t("special requests")}
                multiline
                rows={2}
            />

            <FormControlLabel
                control={
                    <Checkbox
                        color="secondary"
                    />
                }
                label={t("i agree to use my personal data")}
                sx={{
                    '& .MuiFormControlLabel-label': {
                        "fontFamily": theme.typography.fontFamily,
                        "lineHeight": 1.5,
                        "fontSize": theme.typography.body2.fontSize,
                        "fontWeight": theme.typography.body2.fontWeight,
                    }
                }}
            />

        </div>

    )
}

const useStyles = tss
    .withName("ReservationForm")
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "gap": theme.spacing(2),
        },
        "line": {
            "display": "flex",
            "gap": theme.spacing(5),

            [theme.breakpoints.only('mobile')]: {
                "flexDirection": "column",
            },
        },
    }))

export const { i18n } = declareComponentKeys<
    | "your name"
    | "email"
    | "phone number"
    | "number of guests"
    | "date"
    | "time"
    | "special requests"
    | "i agree to use my personal data"
>()({ ReservationForm })