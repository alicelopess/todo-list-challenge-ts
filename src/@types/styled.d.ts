import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// Sobrescrever Tipagem
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
