import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from './hooks/auth'
import { ProjectsProvider } from './hooks/userProjects'
import { Routes } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/Themes/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <ProjectsProvider>
          <HelmetProvider>
            <Helmet titleTemplate="%s - Orange Portfólio" />
            <Routes />
            <GlobalStyle />
          </HelmetProvider>
        </ProjectsProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
