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

  const { classes } = useStyles()


  return (
    <>
      <GlobalStyles
        styles={{
          "html, body": {
            margin: 0,
            padding: 0,
          },
        }}
      />

      <div className={classes.root}>
        {(() => {
          switch (selectedPage) {
            case "home":
              return <Home onChangePage={setSelectedPage} />
            case "menu":
              return <Menu onChangePage={setSelectedPage} />
            case "about":
              return <About onChangePage={setSelectedPage} />
            case "reservation":
              return <Reservation onChangePage={setSelectedPage} />
          }
        })()}

      </div>
    </>
  )
}

const useStyles = tss.create(({ theme }) => ({
  "root": {
    "width": "100vw",
    "backgroundColor": theme.palette.background.default,
    "color": theme.palette.text.primary,
    "overflow": "hidden",
    "height": "100vh",
    [theme.breakpoints.only("mobile")]: {
      "overflow": "unset",
      "height": "unset",
    }
  }
}));