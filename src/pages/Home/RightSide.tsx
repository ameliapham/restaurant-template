import { tss } from 'tss-react/mui'
import { CustomCard } from 'components/CustomCard'
import firstImage from "assets/food-nem.webp"
import secondImage from "assets/reservation2.webp"
import thirdImage from "assets/resto4.webp"
import { declareComponentKeys } from "i18nifty"
import { useTranslation } from "i18n"

type PropsRightSide = {
    className?: string;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "reservation"

export function RightSide(props: PropsRightSide) {

    const { className, onChangePage } = props
    const { cx, classes } = useStyles()
    const { t } = useTranslation({ RightSide})

    return (
        <div className={cx(classes.root, className)}>
            <CustomCard
                className={classes.card}
                backgroundImageUrl={firstImage}
                onClick={() => onChangePage("menu")}
            >
                {t("menu")}
            </CustomCard>

            <CustomCard
                className={classes.card}
                backgroundImageUrl={secondImage}
                onClick={() => onChangePage("reservation")}
            >
                {t("reservation")}
            </CustomCard>
            <CustomCard
                className={classes.card}
                backgroundImageUrl={thirdImage}
                onClick={() => onChangePage("about")}
            >
                {t("about")}
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
            "gap": theme.spacing(2),

            [theme.breakpoints.only('tablet')]: {
                "flexDirection": "row",
            },

            [theme.breakpoints.only("mobile")]: {
                "paddingTop": theme.spacing(2),
            },
        },
        "card": {
            "flex": 1,

            [theme.breakpoints.only("mobile")]: {
                "flex": theme.spacing(40),
            },

        }
    }))

export const { i18n } = declareComponentKeys<
    | "menu"
    | "reservation"
    | "about"
>()({ RightSide });