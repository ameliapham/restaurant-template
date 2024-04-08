import { GlobalStyles } from 'tss-react';
import { tss } from 'tss-react/mui';
import { useState } from "react";

import { Home } from "pages/Home"
import { Menu } from "pages/Menu"
import { About } from "pages/About"
import { Reservation } from "pages/Reservation"




type SelectedPage = "home" | "menu" | "about" | "reservation"



export function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>("home")

  const { classes, theme } = useStyles()

  return (
    <>
      <GlobalStyles
        styles={{
          "html, body": {
            height: "100%",
            width: "100%",
            margin: 0,
            padding: 0,
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
        }}
      />

      <div className={classes.root}>
        {
          {
            "home": <Home onChangePage={setSelectedPage} />,
            "menu": <Menu onChangePage={setSelectedPage} />,
            "about": <About onChangePage={setSelectedPage} />,
            "reservation": <Reservation onChangePage={setSelectedPage} />,
          }[selectedPage]
        }

      </div>
    </>
  )
}

const useStyles = tss.create(({}) => ({
  "root": {
    "display": "flex",
    "height": "100vh",
    "width": "100vw",
  }
}));