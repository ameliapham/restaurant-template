import ReactDOM from 'react-dom/client'
import { App } from 'App'
import { ThemeProvider } from "theme"
import { SelectedPageProvider } from "useSelectedPage";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <SelectedPageProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  </SelectedPageProvider>
)
