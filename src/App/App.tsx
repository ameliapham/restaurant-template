import { darkTheme } from "../theme.tsx"
import { GlobalStyles } from 'tss-react';
import { tss } from 'tss-react/mui';


export function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          "html, body": {
            margin: 0,
            padding: 0,
            backgroundColor: darkTheme.palette.background.default,
            color: darkTheme.palette.text.primary,
          },
        }}
      />


      <div>
        Hello World
      </div>
    </>

  )
}