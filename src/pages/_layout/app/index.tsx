import { Outlet } from 'react-router-dom'
import { AppLayoutContainer, OutletContainer } from './styles'
import { Header } from '../../../components/Header'

export function AppLayout() {
  return (
    <AppLayoutContainer>
      <Header />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <footer></footer>
    </AppLayoutContainer>
  )
}
