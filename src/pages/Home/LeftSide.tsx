//import { darkTheme } from "../../theme"
import { tss } from 'tss-react/mui'

import backgroundImage from "../../assets/food-pho.webp"


type PropsLeftSide = {
    className?: string;
}

export function LeftSide(props: PropsLeftSide) {

    const { className } = props
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <h1 className={cx(classes.h1)}>
                Left side
            </h1>
        </div>
    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "border": `1px solid ${theme.palette.error.main}`,
            "background": `url(${backgroundImage}) center center/cover`,
            "height": "100vh",
        },
        "h1": {
            "color": theme.palette.secondary.main,
            "fontSize": theme.typography.h1.fontSize,
            "fontWeight": theme.typography.h1.fontWeight,
        }
    }))