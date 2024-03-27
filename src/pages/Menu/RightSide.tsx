import { tss } from 'tss-react/mui'
import { CustomButton } from '../../components/CustomButton'
import { alpha } from '@mui/material/styles'
import { FoodList } from './FoodList'
import { useState } from 'react'


type PropsRightSide = {
    className?: string;
}

type FoodCategory = "starters" | "mains" | "desserts" | "drinks"

export function RightSide(props: PropsRightSide) {


    const { className } = props
    const { cx, classes } = useStyles()
    const [selectedCategory, setSelectedCategory] = useState<FoodCategory>("starters")

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.hashtag}>
                <CustomButton
                    className={classes.button}
                    onClick={() => setSelectedCategory("starters")}
                >
                    Starters
                </CustomButton>
                <CustomButton
                    className={classes.button}
                    onClick={() => setSelectedCategory("mains")}
                >
                    Mains
                </CustomButton>
                <CustomButton
                    className={classes.button}
                    onClick={() => setSelectedCategory("desserts")}
                >
                    Desserts
                </CustomButton>
                <CustomButton
                    className={classes.button}
                    onClick={() => setSelectedCategory("drinks")}
                >
                    Drinks
                </CustomButton>
            </div>
            
            <FoodList 
                heading={selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
                foods={selectedCategory}
            ></FoodList>

        </div>

    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "boxSizing": "border-box",
            "gap": "40px",
            "borderRadius": "20px",
            "padding": "20px",
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.2)}`,
        },
        "button": {
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.5)}`,
        },
        "hashtag": {
            "display": "flex",
            "gap": "10px",
            "flexWrap": "wrap",
            "justifyContent": "center",
        },
    }))