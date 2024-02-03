import CloseIcon from '@mui/icons-material/Close'
import { Slide } from '@mui/material'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'

import { useAlertContext } from '../../contexts/AlertContext.'
import { AlertBoxContainer, AlertErrorBoxContainer } from './styles'

export function RegisterAlert() {
  const { registerAlertState, hideRegisterAlert } = useAlertContext()
  return (
    <AlertBoxContainer>
      <Slide in={registerAlertState}>
        <Alert
          variant="filled"
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={hideRegisterAlert}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Registro concluído com sucesso
        </Alert>
      </Slide>
    </AlertBoxContainer>
  )
}

export function ErrorRegisterAlert() {
  const { errorAlertMessage, errorAlertState, hideErrorAlert } =
    useAlertContext()
  return (
    <AlertErrorBoxContainer>
      <Slide in={errorAlertState}>
        <Alert
          variant="filled"
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={hideErrorAlert}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {errorAlertMessage}
        </Alert>
      </Slide>
    </AlertErrorBoxContainer>
  )
}
