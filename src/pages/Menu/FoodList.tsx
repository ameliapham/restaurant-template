import { starters, desserts, mains, drinks } from './FoodDetails';
import Divider from '@mui/material/Divider';
import { FoodItem } from './FoodItem'
import { tss } from 'tss-react/mui'
import Typography from '@mui/material/Typography'

type FoodListProps = {
    className?: string;
    heading: string;
    foods: "starters" | "desserts" | "mains" | "drinks";
}

export function FoodList(props: FoodListProps) {

    const { foods, heading } = props

    const { classes } = useStyles()

    let foodData;
    switch (foods) {
        case "starters":
            foodData = starters;
            break;
        case "desserts":
            foodData = desserts;
            break;
        case "mains":
            foodData = mains;
            break;
        case "drinks":
            foodData = drinks;
            break;
    }

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

            <FoodItem foods={foodData}>
            </FoodItem>

        </div>
    )
}

const useStyles = tss
    .withName("FoodList")
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "gap": theme.spacing(4),
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

    }))