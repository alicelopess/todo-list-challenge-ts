// Themes
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { DefaultLayout } from './layouts/DefaultLayout'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultLayout />
      <h2>Content</h2>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
