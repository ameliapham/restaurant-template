import { tss } from 'tss-react/mui'
import { CustomButton } from './CustomButton'

type PropsCustomCard = {
    className?: string;
    backgroundImage: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

export function CustomCard(props: PropsCustomCard) {

    const { className, backgroundImage, children } = props
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)} style={{ backgroundImage: `url(${backgroundImage})` }}>
                <CustomButton className={classes.button}
                    onHover={() => { console.log("hover") }}
                    onClick={() => { console.log("click") }}
                >
                    {children}
                </CustomButton>

        </div>
    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "justifyContent": "flex-end",
            "boxSizing": "border-box",
            "borderRadius": "10px",
            "background": "center center/cover",
        },
        "button": {
            "right": "10px",
            "alignSelf": "flex-end",
        }
    }))