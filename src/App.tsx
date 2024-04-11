import { useEffect } from "react";
import { GlobalStyles } from 'tss-react';
import { tss } from 'tss';
import { useState } from "react";

import { Home } from "pages/Home"
import { Menu } from "pages/Menu"
import { About } from "pages/About"
import { Reservation } from "pages/Reservation"




type SelectedPage = "home" | "menu" | "about" | "reservation"



export function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>("home")

  const { classes, theme } = useStyles()

  // This is for the theme color of the browser
  // it will take effect when the user is on mobile
  useEffect(
    ()=> {

      const existingMeta = document.querySelector("meta[name='theme-color']")
      if (existingMeta !== null) {
        existingMeta.remove()
      }

      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = theme.palette.background.default;
      document.head.appendChild(meta);

    },
    [theme.palette.mode]
  );

  return (
    <>
      <GlobalStyles
        styles={{
          "html, body": {
            margin: 0,
            padding: 0,
          },
          "body": {
            "backgroundColor": theme.palette.background.default,
          }
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
    "color": theme.palette.text.primary,
    "overflow": "hidden",
    "height": "100vh",
    [theme.breakpoints.only("mobile")]: {
      "overflow": "unset",
      "height": "unset",
    }
  }
}));