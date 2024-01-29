import { Outlet } from 'react-router-dom'

import { Header } from '../../../components/Header'
import { AppLayoutContainer, OutletContainer } from './styles'

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
