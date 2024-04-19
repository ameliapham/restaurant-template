import { tss } from 'tss-react/mui'
import { ListOfDishes } from "../../data/ListOfDishes"
import Typography from '@mui/material/Typography'
import { useResolveLocalizedString } from "i18n";

type PropsFoodItemStructure = {
    className?: string;
    foods: ListOfDishes[];
}

export function FoodItemStructure(props: PropsFoodItemStructure) {

    const { className, foods } = props

    const { cx, classes } = useStyles()

    const { resolveLocalizedString } = useResolveLocalizedString({
        "labelWhenMismatchingLanguage": true
    });

    return (
        <div>
            {foods.map((foods, i) => (
                <div key={i} className={cx(classes.root, className)}>
                    <div
                        className={classes.illustration}
                        style={{ backgroundImage: `url(${foods.illustration})` }}
                    ></div>

                    <div className={classes.textZone}>
                        <div className={classes.nameVsPrice}>
                            <Typography
                                variant='body1'
                            >
                                {resolveLocalizedString(foods.nameOfDish)}
                            </Typography>

                            <Typography
                                variant='body1'
                            >
                                {foods.price}
                            </Typography>
                        </div>

                        {foods.details !== undefined &&
                            <Typography
                                variant='caption'
                                className={classes.details}
                            >
                                {resolveLocalizedString(foods.details)}
                            </Typography>
                        }
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

            [theme.breakpoints.only('mobile')]: {
                "flexDirection": "column",
            },
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

            [theme.breakpoints.only('mobile')]: {
                "width": "90%",
            },
        },
        "nameVsPrice": {
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "space-between",
            "color": theme.palette.text.primary,
            "gap": theme.spacing(1),
        },
        "details": {
            "textAlign": "left",
            "color": theme.palette.text.primary,
            "fontWeight": "lighter",
        },
    }))
