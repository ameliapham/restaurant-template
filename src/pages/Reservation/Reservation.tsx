import { tss } from 'tss-react/mui'
import Fade from "@mui/material/Fade"

import { ReservationDetail } from "./ReservationDetail"
import { HeroSection } from "components/HeroSection"
import backgroundImageUrl from "assets/reservation2.webp"


type PropsReservation = {
    className?: string;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "reservation"

export function Reservation(props: PropsReservation) {

    const { cx, classes } = useStyles()

    const { onChangePage } = props

    return (
        <Fade
            in={true}
            timeout={800}
        >
            <div className={cx(classes.root)}>
                <HeroSection
                    selectedPage='reservation'
                    className={classes.left}
                    onChangePage={onChangePage}
                    backgroundImageUrl={backgroundImageUrl}
                    heroText={<>Book <br /> A Table </>}
                />
                <ReservationDetail className={classes.right} />
            </div>
        </Fade>
    )
}

const useStyles = tss
    .withName({ Reservation })
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "gap": theme.spacing(2),
            "padding": theme.spacing(2),
            "boxSizing": "border-box",
            "height": "100%",
   
            [theme.breakpoints.down('desktop')]: {
                "display": "block",  
                "overflow": "auto",
            },
        },
        "left": {
            "width": "60%",

            [theme.breakpoints.only('tablet')]: {
                "width": "unset",
                "height": "70%",
            },

            [theme.breakpoints.only("mobile")]: {
                "width": "unset",
                "height": theme.spacing(40),
            },
        },
        "right": {
            "flex": 1,
        }
    }));