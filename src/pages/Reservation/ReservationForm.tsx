import { tss } from 'tss-react/mui'
import { CustomTextField } from '../../components/CustomTextField'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { darkTheme } from '../../theme'

type PropsInputForm = {
    className?: string;
}

export function ReservationForm(props: PropsInputForm) {

    const { className } = props
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.line}>
                <CustomTextField
                    label="Your name"
                    required
                />
                <CustomTextField
                    label="Email"
                    required
                />
            </div>

            <div className={classes.line}>
                <CustomTextField
                    label="Phone number"
                    required
                />
                <CustomTextField
                    label="Number of guests"
                    type='number'
                    required
                />
            </div>

            <div className={classes.line}>
                <CustomTextField
                    label="Date"
                    type='date'
                    required
                />
                <CustomTextField
                    label="Time"
                    type='time'
                    required
                />
            </div>

            <CustomTextField
                label="Special requests"
                multiline
                rows={2}
            />

            <FormControlLabel
                control={
                    <Checkbox
                        color="secondary"
                    />
                }
                label="I agree to use my personal data."
                sx={{
                    '& .MuiFormControlLabel-label': {
                        "fontFamily": darkTheme.typography.fontFamily,
                        "lineHeight": 1.5,
                        "fontSize": darkTheme.typography.body2.fontSize,
                        "fontWeight": darkTheme.typography.body2.fontWeight,
                    }
                }}
            />

        </div>

    )
}

const useStyles = tss
    .create(({ }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "gap": "20px",
        },
        "line": {
            "display": "flex",
            "gap": "50px",
        },
    }))