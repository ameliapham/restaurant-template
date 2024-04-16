import { starters, desserts, mains, drinks } from '../../data/ListOfDishes';
import Divider from '@mui/material/Divider';
import { FoodItemStructure } from './FoodItemStructure'
import { tss } from 'tss-react/mui'
import Typography from '@mui/material/Typography'

type PropsMenuStructure = {
    className?: string;
    heading: string;
    foods: "starters" | "desserts" | "mains" | "drinks";
}

export function MenuStructure(props: PropsMenuStructure) {

    const { foods, heading } = props

    const { classes } = useStyles()

    const foodData = (() => {
        switch (foods) {
            case "starters":
                return starters;
            case "desserts":
                return desserts;
            case "mains":
                return mains;
            case "drinks":
                return drinks;
        }
    })();

    return (

        <div className={classes.root}>

            <div className={classes.objectHeading}>
                <Divider
                    component="div"
                    role="presentation"
                    className={classes.divider}
                    textAlign='center'>

                    <Typography
                        variant="h6"
                        className={classes.h6}
                    >
                        {heading}
                    </Typography>

                </Divider>

            </div>
            <div className={classes.foodList}>
                <FoodItemStructure foods={foodData}>
                </FoodItemStructure>
            </div>


        </div>
    )
}

const useStyles = tss
    .withName("FoodList")
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "gap": theme.spacing(3),
            "height": "100%",
            "overflow": "auto",
            "boxSizing": "border-box",
        },
        "objectHeading": {
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "color": theme.palette.text.primary,
        },
        "divider": {
            "width": "90%",
        },
        "h6": {
            "textTransform": "uppercase",
            "color": theme.palette.secondary.dark,
        },
        "foodList": {
            "overflow": "auto",
        },

    }))