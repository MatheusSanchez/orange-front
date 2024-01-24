import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Routes } from './routes'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/Themes/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HelmetProvider>
        <Helmet titleTemplate="%s - Orange Portfólio" />
        <Routes />
        <GlobalStyle />
      </HelmetProvider>
    </ThemeProvider>
  )
}
