import restoImage from 'assets/resto3.jpeg';
import restoImage2 from "assets/resto4.webp"
import { useState } from 'react';
import { tss } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CustomButton } from 'components/CustomButton';


type PropsImage = {
    className?: string;
    src: string;
    alt: string;
}

const images: PropsImage[] = [
    {
        src: restoImage,
        alt: "restoImage"
    },
    {
        src: restoImage2,
        alt: "restoImage"
    }
];

export function Carousel() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { cx, classes } = useStyles();

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    return (
        <div className={cx(classes.root)}>

            {images.map((image, index) => (
                <img
                    key={index}
                    className={cx(classes.image)}
                    src={image.src}
                    alt={image.alt}
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


const useStyles = tss.create(({ theme }) => ({
    "root": {
        "position": "relative",
        "display": "flex",
        "alignContent": "center",
        "justifyContent": "center",
        "width": "100%",
        "height": "100%",
        "overflow": "hidden",
        "gap": "10px",
        "borderRadius": "15px",
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
        "borderRadius": "50px",
        "width": "40px",
        "height": "40px",
        "padding": "0",
        "background": alpha(theme.palette.secondary.light, 0.25),
        "border": `1px solid ${alpha(theme.palette.secondary.light, 0.25)}`,
        "&:first-of-type": {
            "left": "10px",
        },
        "&:last-of-type": {
            "right": "10px",
        },
        "&:hover": {
            "background": alpha(theme.palette.secondary.light, 0.55),

        },
    },
    "icon": {
        "color": theme.palette.text.primary,
        "fontSize": "20px",
    }
}));
