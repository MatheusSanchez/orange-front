import { Outlet } from 'react-router-dom'

import { Header } from '../../../components/Header'
import {
  AlertModal,
  CreateModalSucess,
  DeleteModalSucess,
  EditModalSucess,
  ErrorModal,
} from '../../../components/Modals'
import { AppLayoutContainer, OutletContainer } from './styles'

export function AppLayout() {
  return (
    <AppLayoutContainer>
      <Header />
      <EditModalSucess />
      <CreateModalSucess />
      <DeleteModalSucess />
      <ErrorModal />
      <AlertModal />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </AppLayoutContainer>
  )
}
