import { darkTheme } from "../theme"
import { GlobalStyles } from 'tss-react';
import { tss } from 'tss-react/mui';

import { Home } from "../pages/Home"

export function App() {

  const { cx, classes } = useStyles()

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
        <Home />

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