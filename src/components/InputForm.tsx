import TextField from '@mui/material/TextField'
import { tss } from 'tss-react'
import { darkTheme } from '../theme'


type PropsInputForm = {
    className?: string;
}

export function InputForm(props: PropsInputForm) {

    const { className } = props
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <p className={classes.test}></p>
            <TextField
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                label="Your name"
                variant="filled"
                size="small"
            />
            <TextField
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                label="Email"
                variant="filled"
                size="small"

            />
            <TextField
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                label="Phone number"
                variant="filled"
                size="small"
            />
            <TextField
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                label="Number of guests"
                variant="filled"
                size="small"
            />
            <TextField
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                label="Date"
                variant="filled"
                type="date"
                size="small"
            />
            <TextField
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                label="Time"
                variant="filled"
                type="time"
                size="small"
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
            />

        </div>

    )
}

const useStyles = tss
    .create(({  }) => ({
        "test": {
            "display": "none",
            "color": darkTheme.palette.secondary.main,
        },
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "gap": "20px",
            "color": darkTheme.palette.text.primary,
            "fontFamily": darkTheme.typography.fontFamily,
        },
        "textField": {
            "width": "100%",
        },
    }))