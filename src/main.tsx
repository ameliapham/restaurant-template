import ReactDOM from 'react-dom/client'
import { App } from 'App'
import { ThemeProvider } from "theme";
import { FooProvider } from "tools/useFoo";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <FooProvider fooDefaultValue="This is the default value of foo">
      <App />
    </FooProvider>
  </ThemeProvider>,
)
