import { darkTheme } from "../theme"
import { tss } from 'tss-react/mui'

type FoodListProps = {
    className?: string;
    illustration: string;
    nameOfDish: string;
    price: number;
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
                    <h4 lassName={classes.details}>Nem</h4>
                    <h4 className={classes.details}>6.00€</h4>
                </div>

                <div>
                    <h6 className={classes.details} >Detail</h6>
                </div>

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
        },
    }))
