import { tss } from 'tss-react/mui'
import { CustomTextField } from './CustomTextField'

type PropsInputForm = {
    className?: string;
}

export function InputForm(props: PropsInputForm) {

    const { className } = props
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <CustomTextField
                label="Your name"
                required
            />
            <CustomTextField
                label="Email"
                required
            />
            <CustomTextField
                label="Phone number"
                required
            />
            <CustomTextField
                label="Number of guests"
                type='number'
                required
            />
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
            <CustomTextField
                label="Special requests"
                multiline
                rows={2}
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
    }))