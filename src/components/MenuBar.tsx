import { tss } from 'tss-react/mui'
import { CustomButton } from './CustomButton'
import logo from '../assets/logo.svg'
import { alpha } from '@mui/material/styles'
import { useState } from 'react'

type PropsMenuBar = {
    className?: string;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "book"

export function MenuBar(props: PropsMenuBar) {

    const { className, onChangePage } = props
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <img
                className={cx(classes.logo)}
                src={logo}
                alt="logo"
                onClick={() => onChangePage("home")}
            />
            <CustomButton
                onClick={() => onChangePage("menu")}
            >
                Menu
            </CustomButton>
            <CustomButton
                onClick={() => onChangePage("about")}
            >
                About
            </CustomButton>
            <CustomButton
                onClick={() => onChangePage("book")}
                className={classes.bookTable}
            >
                Book a table
            </CustomButton>
        </div>
    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "boxSizing": "border-box",
            "display": "inline-flex",
            "justifyContent": "center",
            "gap": "10px",
            "padding": "5px 15px 5px 15px",
            "border": `1px solid ${theme.palette.primary.main}`,
            "borderRadius": "10px",
            "background": theme.palette.primary.dark,
            "alignItems": "center",
            "alignSelf": "flex-start",
        },
        "logo": {
            "width": "80px",
            "cursor": "pointer",
        },
        "bookTable": {
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.5)}`,
        }
    }))