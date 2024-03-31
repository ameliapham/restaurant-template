import TextField from '@mui/material/TextField'
import { tss } from 'tss-react/mui'
import { useState } from 'react'
import { alpha } from '@mui/material/styles'

type PropsCustomTextField = {
    className?: string;
    label: string;
    type?: string;
    required?: boolean;
}

export function CustomTextField(props: PropsCustomTextField) {

    const { className, label, type, required } = props
    const { cx, classes } = useStyles()
    const [error, setError] = useState(false)

    const handleValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === "") {
            setError(true)
        } else {
            setError(false)
        }
    }

    return (
        <TextField
            className={cx(classes.textField, className)}
            InputLabelProps={{
                shrink: true,
                //className: classes.inputLabel
            }}
            InputProps={{
                className: classes.input
            }}
            label={label}
            type = {type}
            variant="standard"
            size="small"
            color="secondary"
            required={required}
            error={error}
            helperText={error ? "This field is required" : ""}
            onChange={handleValidation}
        />
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
            "& .MuiFilledInput-root": { // Style de l'input root
                "background": theme.palette.primary.dark,
            },
            "& .MuiFormLabel-root": { // Style de form label avant
                "color": alpha(theme.palette.text.secondary, 0.5),
            },
            "& .Mui-focused": { // Style de form label après
                "color": theme.palette.secondary.main,
            },
            "& .MuiInputBase-input": { // Style de l'input
                "color": theme.palette.secondary.main,
            },
            "& .MuiInput-underline:before": { // Style de l'underline avant
                "borderBottomColor": theme.palette.primary.main,
            },
            "& .MuiInput-underline:after": { // Style de l'underline après
                "borderBottomColor": theme.palette.secondary.dark,
            },
            "& .MuiFormHelperText-root": { // Style de l'helper text
                "margin": "10px 0 0 0",
                "padding": 0,
                "lineHeight": 1,
            },
        },
        "input": { // Style de l'input
            "fontFamily": theme.typography.fontFamily,

        },
        "inputLabel": { // Style de l'input label
            "fontStyle": "italic",
        },
    }))