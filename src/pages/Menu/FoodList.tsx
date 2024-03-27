import { starters, desserts, mains, drinks } from './FoodDetails';
import Divider from '@mui/material/Divider';
import { FoodItem } from './FoodItem'
import { tss } from 'tss-react/mui'

type FoodListProps = {
    className?: string;
    heading: string;
    foods: "starters" | "desserts" | "mains" | "drinks";
}

export function FoodList(props: FoodListProps) {
    
    const { className, foods, heading } = props

    const { cx, classes } = useStyles()

    let foodData;
    switch(foods) {
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
                <Divider className={classes.divider}>
                    {heading}
                </Divider>
            </div>

            <FoodItem foods={foodData}>
            </FoodItem>

        </div>
    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "gap": "30px",
        },
        "objectHeading": {
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            //"border": "1px solid red",
            "fontFamily": theme.typography.fontFamily,
            "color": theme.palette.text.primary,
            "fontSize": theme.typography.body1.fontSize,
        },
        "divider": {
            "width": "82%",
        }

    }))