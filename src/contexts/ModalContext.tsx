/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from 'react'

interface ModalContextType {
  editModalState: boolean
  createModalState: boolean
  deleteModalState: boolean
  errorModalState: boolean
  alertModalState: boolean
  openEditModal: () => void
  openCreateModal: () => void
  openDeleteModal: () => void
  openErrorModal: () => void
  openAlertModal: () => void
  closeEditModal: () => void
  closeCreateModal: () => void
  closeDeleteModal: () => void
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

  const [errorModalState, setErrorModalState] = useState(false)
  const openErrorModal = () => setErrorModalState(true)
  const closeErrorModal = () => setErrorModalState(false)

  const [alertModalState, setAlertModalState] = useState(false)
  const openAlertModal = () => setAlertModalState(true)
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
        errorModalState,
        openErrorModal,
        closeErrorModal,
        alertModalState,
        openAlertModal,
        closeAlertModal,
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
