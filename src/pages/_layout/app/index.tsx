import { Outlet } from 'react-router-dom'

import { Header } from '../../../components/Header'
import {
  AlertError,
  AlertModal,
  ChangePasswordSucess,
  CreateModalSucess,
  DeleteModalSucess,
  EditModalSucess,
  ErrorModal,
  UpdateProfileSucess,
} from '../../../components/Modals'
import { AppLayoutContainer, OutletContainer } from './styles'

export function AppLayout() {
  return (
    <AppLayoutContainer>
      <Header />
      <EditModalSucess />
      <CreateModalSucess />
      <DeleteModalSucess />
      <UpdateProfileSucess />
      <ChangePasswordSucess />
      <AlertError />
      <ErrorModal />
      <AlertModal />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </AppLayoutContainer>
  )
}
