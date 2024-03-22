import { tss } from 'tss-react/mui'

type PropsRightSide = {
    className?: string;
}

export function RightSide(props: PropsRightSide) {

    const { className } = props
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <h1 className={cx(classes.h1)}>
                Right side
            </h1>
        </div>
    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "border": `1px solid ${theme.palette.success.main}`,
            "height": "100vh",
            "borderRadius": "20px",
        },
        "h1": {
            "color": theme.palette.secondary.main,
            "fontSize": theme.typography.h1.fontSize,
            "fontWeight": theme.typography.h1.fontWeight,
        }
    }))