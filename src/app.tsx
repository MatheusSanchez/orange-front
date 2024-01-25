import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from './hooks/auth'
import { Routes } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/Themes/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <HelmetProvider>
          <Helmet titleTemplate="%s - Orange Portfólio" />
          <Routes />
          <GlobalStyle />
        </HelmetProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
