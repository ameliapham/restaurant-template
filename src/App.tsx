import { GlobalStyles } from 'tss-react';
import { tss } from 'tss-react/mui';
import { Home } from "pages/Home"
import { Menu } from "pages/Menu"
import { About } from "pages/About"
import { Reservation } from "pages/Reservation"
import { useSelectedPage } from "useSelectedPage";

export function App() {

  const { selectedPage } = useSelectedPage();

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
      <div className={classes.root}>
        {(() => {
          switch (selectedPage) {
            case "home":
              return <Home />
            case "menu":
              return <Menu  />
            case "about":
              return <About />
            case "reservation":
              return <Reservation />
          }
        })()}
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