import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'

import { AlertProvider } from './contexts/AlertContext.'
import { ModalProvider } from './contexts/ModalContext'
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
          <ModalProvider>
            <AlertProvider>
              <HelmetProvider>
                <Helmet titleTemplate="%s - Orange Portfólio" />
                <Routes />
                <GlobalStyle />
              </HelmetProvider>
            </AlertProvider>
          </ModalProvider>
        </ProjectsProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
