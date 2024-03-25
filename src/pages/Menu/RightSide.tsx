import { tss } from 'tss-react/mui'
import { CustomButton } from '../../components/CustomButton'
import { alpha } from '@mui/material/styles'
import Divider from '@mui/material/Divider';
import { FoodDetail } from '../../components/FoodDetail'
import example from '../../assets/food-nem.webp'


type PropsRightSide = {
    className?: string;
}

export function RightSide(props: PropsRightSide) {

    const { className } = props
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.hashtag}>
                <CustomButton
                    className={classes.button}
                    onClick={() => { console.log("click") }}
                >
                    Starters
                </CustomButton>
                <CustomButton
                    className={classes.button}
                    onClick={() => { console.log("click") }}
                >
                    Mains
                </CustomButton>
                <CustomButton
                    className={classes.button}
                    onClick={() => { console.log("click") }}
                >
                    Desserts
                </CustomButton>
                <CustomButton
                    className={classes.button}
                    onClick={() => { console.log("click") }}
                >
                    Drinks
                </CustomButton>
            </div>
            <div className={classes.objectHeading}>
                <Divider className={classes.divider}>
                    Starters
                </Divider>
            </div>
            <FoodDetail
                illustration={example}
            >

            </FoodDetail>

        </div>

    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "boxSizing": "border-box",
            "gap": "20px",
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
        "objectHeading": {
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            //"border": "1px solid red",
        },
        "divider": {
            "width": "82%",
        }

    }))