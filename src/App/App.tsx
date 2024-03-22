import { darkTheme } from "../theme"
import { GlobalStyles } from 'tss-react';
import { tss } from 'tss-react/mui';

import { AllTogether } from "../pages/Home"

export function App() {

  return (
    <>
      <GlobalStyles
        styles={{
          "html, body": {
            margin: 0,
            padding: 0,
            backgroundColor: darkTheme.palette.primary.dark,
            color: darkTheme.palette.text.primary,
          },
        }}
      />

      <div>
        <AllTogether />

      </div>
    </>
  )
}