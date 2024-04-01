import ReactDOM from 'react-dom/client'
import { App } from 'App'
import { ThemeProvider } from "theme";
import { FooProvider } from "tools/useFoo";
import { DarkModeProvider } from "theme/useDarkMode";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DarkModeProvider>
    <ThemeProvider>
      <FooProvider fooDefaultValue="This is the default value of foo">
        <App />
      </FooProvider>
    </ThemeProvider>
  </DarkModeProvider>
)
