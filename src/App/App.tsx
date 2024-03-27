import { darkTheme } from "../theme"
import { GlobalStyles } from 'tss-react';
import { tss } from 'tss-react/mui';
import { useState } from "react";

import { Home } from "../pages/Home"
import { Menu } from "../pages/Menu"
import { About } from "../pages/About"




type SelectedPage = "home" | "menu" | "about" | "book"



export function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>("home")

  const { cx, classes } = useStyles()
  /*
  const handleChangePage = (page: SelectedPage) => {
    setSelectedPage(page)
  }*/

  return (
    <>
      <GlobalStyles
        styles={{
          "html, body": {
            height: "100%",
            width: "100%",
            margin: 0,
            padding: 0,
            backgroundColor: darkTheme.palette.primary.dark,
            color: darkTheme.palette.text.primary,
          },
        }}
      />

      <div className={classes.root}>
        {
          {
            "home": <Home onChangePage={setSelectedPage} />,
            "menu": <Menu onChangePage={setSelectedPage} />,
            "about": <About onChangePage={setSelectedPage} />,
            "book": <div>Book</div>
          }[selectedPage]
        }

      </div>
    </>
  )
}

const useStyles = tss.create(({ theme }) => ({
  "root": {
    "display": "flex",
    "height": "100vh",
    "width": "100vw",
  }
}));