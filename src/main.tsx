import ReactDOM from 'react-dom/client'
import { App } from './App/App.tsx'
import { ThemeProvider } from '@mui/material/styles'
import { darkTheme } from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>,
)
