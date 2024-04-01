
import { ReactNode } from "react";
import { tss } from "tss-react/mui";
import { MenuBar } from "components/MenuBar";
import Typography from "@mui/material/Typography";

type Props = {
    className?: string;
    heroText: ReactNode;
    backgroundImageUrl: string;
    selectedPage: "home" | "menu" | "about" | "reservation";
    onChangePage: (page: "home" | "menu" | "about" | "reservation") => void;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
};

export function LeftSide(props: Props) {

    const { className, heroText, onChangePage, selectedPage, backgroundImageUrl } = props
    const { cx, classes } = useStyles({ 
        "classesOverrides": props.classes,
        backgroundImageUrl 
    });

    return (
        <div className={cx(classes.root, className)}>

            <MenuBar selectedPage={selectedPage} onChangePage={onChangePage} />

            <Typography variant="h1" className={classes.heroText}>
                {heroText}
            </Typography>

        </div >
    );

}

const useStyles = tss
    .withName({ LeftSide })
    .withParams<{ backgroundImageUrl: string; }>()
    .create(({ theme, backgroundImageUrl }) => ({
        "root": {
            "boxSizing": "border-box",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "space-between",
            "background": `url(${backgroundImageUrl}) center center/cover`,
            "borderRadius": "20px",
            "padding": "30px 50px 30px 50px",
        },
        "heroText": {
            "color": theme.palette.text.primary,
            "margin": "0",
        }
    }))