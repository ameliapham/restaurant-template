import TextField from '@mui/material/TextField'
import { tss } from 'tss-react/mui'
import { useState } from 'react'

type PropsInputForm = {
    className?: string;
}

export function InputForm(props: PropsInputForm) {

    const { className } = props
    const { cx, classes } = useStyles()
    const [error, setError] = useState(false)

    const handleValidation = (event: any) => {
        if (event.target.value === "") {
            setError(true)
        } else {
            setError(false)
        }
    }

    return (
        <div className={cx(classes.root, className)}>
            <TextField
                className={classes.textField}
                InputLabelProps={{ 
                    shrink: true,
                    className: classes.inputLabel
                }}
                InputProps={{ 
                    className: classes.input
                }}
                label="Your name"
                variant="filled"
                size="small"
                color="secondary"
                required
                error={error}
                helperText={error ? "This field is required" : ""}
                onChange={handleValidation}
            />
            <TextField
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                label="Email"
                variant="filled"
                size="small"
                color="secondary"
            />
            <TextField
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                label="Phone number"
                variant="filled"
                size="small"
                color="secondary"
            />
            <TextField
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                label="Number of guests"
                variant="filled"
                size="small"
                color="secondary"
            />
            <TextField
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                label="Date"
                variant="filled"
                type="date"
                size="small"
                color="secondary"
            />
            <TextField
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                label="Time"
                variant="filled"
                type="time"
                size="small"
                color="secondary"
            />
            <TextField
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                label="Special requests"
                variant="filled"
                defaultValue={""}
                multiline
                rows={4}
                size="small"
                color="secondary"
            />

        </div>

    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "gap": "20px",
        },
        "textField": {
            "width": "100%",
            "& .MuiFilledInput-root": {
                "background": theme.palette.secondary.light,
                "color": theme.palette.text.primary,
            },
            "& .MuiFormLabel-root": {
                "color": theme.palette.text.primary,
            },
            "& .MuiInputBase-input": {
                "color": theme.palette.secondary.main,
            },
            "& .MuiInput-underline:before": {
                "borderBottomColor": theme.palette.secondary.main,
            },
            "& .MuiInput-underline:after": {
                "borderBottomColor": theme.palette.secondary.dark,
            },
        },
        "input": {
            "fontFamily": theme.typography.fontFamily,

        },
        "inputLabel": {
            "fontStyle": "italic",
        },
    }))