import { darkTheme } from "../theme"
import { tss } from 'tss-react/mui'

type FoodListProps = {
    className?: string;
    illustration: string;
    nameOfDish: string;
    price: string;
    details: string;
}

export function FoodDetail(props: FoodListProps) {

    const { className, illustration, nameOfDish, details, price } = props
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <div
                className={classes.illustration}
                style={{ backgroundImage: `url(${illustration})` }}
            ></div>

            <div className={classes.textZone}>
                <div className={classes.nameVsPrice}>
                    <text>{nameOfDish}</text>
                    <text>{price}</text>
                </div>

                <caption className={classes.details}>
                    {details}
                </caption>

            </div>

        </div>
    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "boxSizing": "border-box",
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "flex-start",
            "borderRadius": "20px",
            "gap": "20px",
            "alignContent": "center",
        },
        "illustration": {
            "borderRadius": "10px",
            "background": "center center/cover",
            "width": "30%",

        },
        "textZone": {
            "display": "flex",
            "flexDirection": "column",
            "gap": "5px",
            "width": "70%",
        },
        "nameVsPrice": {
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "space-between",
            "fontFamily": theme.typography.fontFamily,
            "color": theme.palette.text.primary,
            "fontSize": theme.typography.body1.fontSize,
            "fontWeight": theme.typography.body1.fontWeight,
        },
        "details": {
            "textAlign": "left",
            "fontFamily": theme.typography.fontFamily,
            "color": theme.palette.text.primary,
            "fontSize": theme.typography.caption.fontSize,
            "fontWeight": theme.typography.caption.fontWeight,
        },
    }))
