import { RestaurantDetail } from "data/RestaurantDetail";
import { useState } from 'react';
import { tss } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CustomButton } from 'components/CustomButton';




export function Carousel() {

    const illustrations = RestaurantDetail.illustrations.photos;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { cx, classes } = useStyles();

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % illustrations.length);
    }

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + illustrations.length) % illustrations.length);
    }

    return (
        <div className={cx(classes.root)}>

            {illustrations.map((illustrations, index) => (
                <img
                    key={index}
                    className={cx(classes.image)}
                    src={illustrations.url}
                    alt={illustrations.alt}
                    style={{
                        opacity: index === currentImageIndex ? 1 : 0,
                        position: 'absolute',
                        left: 0,
                        top: 0,
                    }}
                />
            ))}

            <CustomButton
                className={cx(classes.button)}
                onClick={goToPreviousImage}
            >
                <ArrowBackIosNewIcon className={cx(classes.icon)} />
            </CustomButton>

            <CustomButton
                className={cx(classes.button)}
                onClick={goToNextImage}
            >
                <ArrowForwardIosIcon className={cx(classes.icon)} />
            </CustomButton>
        </div>
    )
}


const useStyles = tss
    .withName({ Carousel })
    .create(({ theme }) => ({
        "root": {
            "position": "relative",
            "display": "flex",
            "alignContent": "center",
            "justifyContent": "center",
            "width": "100%",
            "height": "100%",
            "overflow": "hidden",
            "borderRadius": theme.spacing(2),
            "border": `1px solid ${theme.palette.secondary.light}`,
        },
        "image": {
            "width": "100%",
            "height": "100%",
            "objectFit": "cover",
            "objectPosition": "center center",
            "background": "center center/cover",
            "transition": "opacity .4s ease-in-out",
        },
        "button": {
            "position": "absolute",
            "top": "50%",
            "transform": "translateY(-50%)",
            "justifyContent": "center",
            "borderRadius": theme.spacing(5),
            "min-width": theme.spacing(4.5),
            "height": theme.spacing(4.5),
            "padding": "0",
            "background": alpha(theme.palette.secondary.light, 0.25),
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.25)}`,
            "&:first-of-type": {
                "left": theme.spacing(3),
            },
            "&:last-of-type": {
                "right": theme.spacing(3),
            },
            "&:hover": {
                "background": alpha(theme.palette.secondary.light, 0.55),

            },
        },
        "icon": {
            "color": theme.palette.text.primary,
            "fontSize": theme.spacing(2),
        }
    }));
