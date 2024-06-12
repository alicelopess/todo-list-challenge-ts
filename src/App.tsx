// Providers
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

// Routes
import { Router } from './Router'

// Themes
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { TaskContextProvider } from './contexts/TaskContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <TaskContextProvider>
          <Router />
        </TaskContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
