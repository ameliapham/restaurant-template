import { tss } from 'tss-react/mui'
import { FoodDetail } from "./FoodDetails"
import Typography from '@mui/material/Typography'

type FoodItemProps = {
    className?: string;
    foods: FoodDetail[];
}

export function FoodItem(props: FoodItemProps) {

    const { className, foods } = props

    const { cx, classes } = useStyles()

    return (
        <div>
            {foods.map((foods) => (
                <div key={foods.id} className={cx(classes.root, className)}>
                    <div
                        className={classes.illustration}
                        style={{ backgroundImage: `url(${foods.illustration})` }}
                    ></div>

                    <div className={classes.textZone}>
                        <div className={classes.nameVsPrice}>
                            <Typography
                                variant='body2'
                            >
                                {foods.nameOfDish}
                            </Typography>

                            <Typography
                                variant='body2'
                            >
                                {foods.price}
                            </Typography>
                        </div>

                        <Typography
                            variant='caption'
                            className={classes.details}
                        >
                            {foods.details}
                        </Typography>

                    </div>
                </div>
            ))
            }

        </div >

    )
}

const useStyles = tss
    .withName("FoodItem")
    .create(({ theme }) => ({
        "root": {
            "boxSizing": "border-box",
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "center",
            "gap": theme.spacing(2),
            "alignItems": "center",
            "paddingBottom": theme.spacing(2),
        },
        "illustration": {
            "background": "center center/cover",
            "width": "30%",
            "height": "100%",
            "minHeight": theme.spacing(12),
            "maxHeight": theme.spacing(12),
            "maxWidth": theme.spacing(12),
        },
        "textZone": {
            "display": "flex",
            "flexDirection": "column",
            "gap": theme.spacing(1),
            "width": "70%",
        },
        "nameVsPrice": {
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "space-between",
            "color": theme.palette.secondary.dark,
            "gap": theme.spacing(1),
        },
        "details": {
            "textAlign": "left",
            "color": theme.palette.text.primary,
        },
    }))
