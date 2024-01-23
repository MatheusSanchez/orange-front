import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Routes } from './routes'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s - Orange Portfólio" />
      <Routes />
      <GlobalStyle />
    </HelmetProvider>
  )
}
