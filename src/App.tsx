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
            margin: 0,
            padding: 0,
          },
          "html": {
            "scrollBehavior": "smooth",
          },
          "body": {
            "backgroundColor": theme.palette.background.default,
          }
        }}
      />

        <a href="#foo">Go to foo</a>
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
        <div id="foo">
          sdfqsdfqsdf d fqsdf qsdf sqdf sqf
          sd fq
          sf qsf qsdf qsf qsf qsf 
        </div>

        <div >
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
          <p>xxx</p>
        </div>

      </div>
    </>
  )
}

const useStyles = tss.create(({ theme }) => ({
  "root": {
    "height": "100vh",
    "width": "100vw",
    "overflow": "hidden",
    "color": theme.palette.text.primary,
    [theme.breakpoints.only('mobile')]: {
      "overflow": "unset",
      "height": "unset",
    },
  },
}));