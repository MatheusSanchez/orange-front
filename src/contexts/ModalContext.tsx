/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from 'react'

interface ModalContextType {
  editModalState: boolean
  createModalState: boolean
  deleteModalState: boolean
  updateProfileModalState: boolean
  changePasswordModalState: boolean
  alertErrorModalState: boolean
  errorModalState: boolean
  alertModalState: boolean
  projectIdToBeDeleted: string | undefined
  openEditModal: () => void
  openCreateModal: () => void
  openDeleteModal: () => void
  openUpdateProfileModal: () => void
  openChangePasswordModal: () => void
  openAlertErrorModal: () => void
  openErrorModal: () => void
  openAlertModal: (projectId: string | undefined) => void
  closeEditModal: () => void
  closeCreateModal: () => void
  closeDeleteModal: () => void
  closeUpdateProfileModal: () => void
  closeChangePasswordModal: () => void
  closeAlertErrorModal: () => void
  closeErrorModal: () => void
  closeAlertModal: () => void
}

export const ModalContext = createContext({} as ModalContextType)

interface ModalProviderProps {
  children: ReactNode
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [editModalState, setEditModalState] = useState(false)
  const openEditModal = () => setEditModalState(true)
  const closeEditModal = () => setEditModalState(false)

  const [createModalState, setCreateModalState] = useState(false)
  const openCreateModal = () => setCreateModalState(true)
  const closeCreateModal = () => setCreateModalState(false)

  const [deleteModalState, setDeleteModalState] = useState(false)
  const openDeleteModal = () => setDeleteModalState(true)
  const closeDeleteModal = () => setDeleteModalState(false)

  const [updateProfileModalState, setUpdateProfileModalState] = useState(false)
  const openUpdateProfileModal = () => setUpdateProfileModalState(true)
  const closeUpdateProfileModal = () => setUpdateProfileModalState(false)

  const [changePasswordModalState, setChangePasswordModalState] =
    useState(false)
  const openChangePasswordModal = () => setChangePasswordModalState(true)
  const closeChangePasswordModal = () => setChangePasswordModalState(false)

  const [alertErrorModalState, setAlertErrorModalState] = useState(false)
  const openAlertErrorModal = () => setAlertErrorModalState(true)
  const closeAlertErrorModal = () => setAlertErrorModalState(false)

  const [errorModalState, setErrorModalState] = useState(false)
  const openErrorModal = () => setErrorModalState(true)
  const closeErrorModal = () => setErrorModalState(false)

  const [alertModalState, setAlertModalState] = useState(false)
  const [projectIdToBeDeleted, setProjectIdToBeDeleted] = useState<
    string | undefined
  >('')
  function openAlertModal(projectId: string | undefined) {
    setAlertModalState(true)
    setProjectIdToBeDeleted(projectId)
  }
  const closeAlertModal = () => setAlertModalState(false)

  return (
    <ModalContext.Provider
      value={{
        editModalState,
        openEditModal,
        closeEditModal,
        createModalState,
        openCreateModal,
        closeCreateModal,
        deleteModalState,
        openDeleteModal,
        closeDeleteModal,
        updateProfileModalState,
        openUpdateProfileModal,
        closeUpdateProfileModal,
        changePasswordModalState,
        openChangePasswordModal,
        closeChangePasswordModal,
        alertErrorModalState,
        openAlertErrorModal,
        closeAlertErrorModal,
        errorModalState,
        openErrorModal,
        closeErrorModal,
        alertModalState,
        openAlertModal,
        closeAlertModal,
        projectIdToBeDeleted,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => {
  const context = useContext(ModalContext)
  return context
}
