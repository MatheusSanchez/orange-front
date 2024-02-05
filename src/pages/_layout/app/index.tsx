import { Outlet } from 'react-router-dom'

import { RegisterAlert } from '../../../components/Alert'
import { Header } from '../../../components/Header'
import {
  AlertError,
  AlertModal,
  ChangePasswordSucess,
  CreateModalSucess,
  DeleteModalSucess,
  EditModalSucess,
  EditProjectModal,
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
      <RegisterAlert />
      <EditProjectModal />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </AppLayoutContainer>
  )
}
