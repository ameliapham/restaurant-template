import TextField from '@mui/material/TextField'
import { TextFieldProps } from '@mui/material/TextField';
import { tss } from 'tss-react/mui'
import { useState } from 'react'
import { alpha } from '@mui/material/styles'

type PropsCustomTextField = TextFieldProps & {
    className?: string;

}

export function CustomTextField(props: PropsCustomTextField) {

    const { className, label, type, required = false, ...otherProps } = props
    const { cx, classes } = useStyles()
    const [error, setError] = useState<boolean>(false)

    const handleValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (required && event.target.value === "") {
            setError(true)
        } else {
            setError(false)
        }
    }

    return (
        <TextField
            className={cx(classes.textField, className)}
            label={label}
            type={type}
            variant="standard"
            size="small"
            color="secondary"
            required={required}
            error={error}
            helperText={error ? "This field is required" : ""}
            onChange={handleValidation}

            {...otherProps} // Le reste des props au TextField

            InputLabelProps={{
                shrink: true,
                //className: classes.inputLabel
            }}

            InputProps={{
                className: classes.input,
                classes: {
                    "underline": classes.inputUnderline
                }
            }}
        />
    )
}

const useStyles = tss
    .create(({ theme }) => ({
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
            "& .MuiFormHelperText-root": { // Style de l'helper text
                "margin": "10px 0 0 0",
                "padding": 0,
                "lineHeight": 1,
            },
        },
        "input": { // Style de l'input
            "fontFamily": theme.typography.fontFamily,
        },
        "inputUnderline": {
                "&:before": {
                    "borderBottomColor": theme.palette.primary.main,
                },
                "&:after": {
                    "borderBottomColor": theme.palette.secondary.dark,
                },
        },
        "inputLabel": { // Style de l'input label
            "fontStyle": "italic",
        },
    }))