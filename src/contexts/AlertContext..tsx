/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from 'react'

interface AlertContextType {
  registerAlertState: boolean
  errorAlertState: boolean
  errorAlertMessage: string
  showRegisterAlert: () => void
  hideRegisterAlert: () => void
  showErrorAlert: (alertMessage: string) => void
  hideErrorAlert: () => void
}

export const AlertContext = createContext({} as AlertContextType)

interface AlertProviderProps {
  children: ReactNode
}

export function AlertProvider({ children }: AlertProviderProps) {
  const [registerAlertState, setRegisterAlertState] = useState(false)

  function showRegisterAlert() {
    setRegisterAlertState(true)
    setTimeout(() => setRegisterAlertState(false), 4000)
  }
  const hideRegisterAlert = () => setRegisterAlertState(false)

  const [errorAlertState, setErrorAlertState] = useState(false)
  const [errorAlertMessage, setErrorAlertMessage] = useState(
    'Desculpe, ocorreu um erro',
  )
  function showErrorAlert(alertMessage: string) {
    setErrorAlertMessage(alertMessage)
    setErrorAlertState(true)
    setTimeout(() => setErrorAlertState(false), 3000)
  }
  const hideErrorAlert = () => setErrorAlertState(false)

  return (
    <AlertContext.Provider
      value={{
        registerAlertState,
        hideRegisterAlert,
        showRegisterAlert,
        errorAlertMessage,
        errorAlertState,
        hideErrorAlert,
        showErrorAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}

export const useAlertContext = () => {
  const context = useContext(AlertContext)
  return context
}
