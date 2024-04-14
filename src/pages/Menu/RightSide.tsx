import { tss } from 'tss-react/mui'
import { FoodList } from './FoodList'
import { useState } from 'react'
import { Divider } from '@mui/material'
import { HashtagButton } from './HashtagButton'


type PropsRightSide = {
    className?: string;
}

type FoodCategory = "starters" | "mains" | "desserts" | "drinks"

export function RightSide(props: PropsRightSide) {


    const { className } = props
    const { cx, classes } = useStyles({ selected: false })
    const [selectedCategory, setSelectedCategory] = useState<FoodCategory>("starters")

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.hashtag}>
                <HashtagButton
                    onClick={() => setSelectedCategory("starters")}
                    selected={selectedCategory === "starters"}
                >
                    Starters
                </HashtagButton>

                <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    className={classes.divider}
                />

                <HashtagButton
                    onClick={() => setSelectedCategory("mains")}
                    selected={selectedCategory === "mains"}
                >
                    Mains
                </HashtagButton>


                <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    className={classes.divider}
                />

                <HashtagButton
                    onClick={() => setSelectedCategory("desserts")}
                    selected={selectedCategory === "desserts"}
                >
                    Desserts
                </HashtagButton>


                <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    className={classes.divider}
                />

                <HashtagButton
                    onClick={() => setSelectedCategory("drinks")}
                    selected={selectedCategory === "drinks"}
                >
                    Drinks
                </HashtagButton>
            </div>

            <FoodList
                heading={selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
                foods={selectedCategory}
            ></FoodList>

        </div>

    )
}

const useStyles = tss
    .withName("RightSide")
    .withParams<{ selected: boolean }>()
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "boxSizing": "border-box",
            "gap": theme.spacing(5),
            "borderRadius": theme.spacing(2),
            "padding": `${theme.spacing(2)}`,
            "border": `1px solid ${theme.palette.secondary.light}`,
            "overflow": "hidden",
            "height": "100%",

            [theme.breakpoints.only('tablet')]: {
                "marginTop": `${theme.spacing(2)}`,
            },
        },
        "hashtag": {
            "display": "flex",
            "flexWrap": "wrap",
            "justifyContent": "center",
        },
        "divider": {
            "background": theme.palette.secondary.light,
        }
    }))