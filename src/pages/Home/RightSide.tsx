import { tss } from 'tss-react/mui'
import { CustomCard } from '../../components/CustomCard'
import firstImage from "../../assets/food-nem.webp"
import secondImage from "../../assets/reservation2.webp"
import thirdImage from "../../assets/resto4.webp"


type PropsRightSide = {
    className?: string;
}

export function RightSide(props: PropsRightSide) {

    const { className } = props
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <CustomCard className={classes.card}
                backgroundImage={firstImage}
                onClick={() => { console.log("click") }}
            >
                Menu
            </CustomCard>

            <CustomCard className={classes.card}
                backgroundImage={secondImage}
                onClick={() => { console.log("click") }}
            >
                Reservation
            </CustomCard>
            <CustomCard className={classes.card}
                backgroundImage={thirdImage}
                onClick={() => { console.log("click") }}
            >
                Our restaurant
            </CustomCard>
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
        },
        "card": {
            "display": "flex",
            "flexGrow": 1,
        }
    }))