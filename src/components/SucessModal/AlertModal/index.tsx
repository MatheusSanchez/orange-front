import { Modal } from '@mui/material'
import Button from '@mui/material/Button'
import { useState } from 'react'

import { SucessModal } from '..'
import { BoxContainer, BoxContainerControl } from './styles'

interface AlertModalProps {
  openAlertModal: boolean
  handleCloseAlertModal: () => void
}

export default function AlertModal(props: AlertModalProps) {
  const [openSucessModal, setOpenSucessModal] = useState(false)

  const handleOpenSucessModal = () => setOpenSucessModal(true)
  const handleCloseSucessModal = () => setOpenSucessModal(false)

  function handleOpenSucessModalAndCloseAlertModal() {
    props.handleCloseAlertModal()
    handleOpenSucessModal()
  }

  return (
    <>
      <SucessModal
        delete
        openSucessModal={openSucessModal}
        handleCloseSucessModal={handleCloseSucessModal}
      />
      <Modal open={props.openAlertModal} onClose={props.handleCloseAlertModal}>
        <BoxContainer>
          <h2>Deseja Excluir?</h2>
          <span>Se você prosseguir irá excluir o projeto do seu portfólio</span>
          <BoxContainerControl>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#f32',
                fontWeight: 'bold',
              }}
              onClick={handleOpenSucessModalAndCloseAlertModal}
            >
              Excluir
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#0000001f',
                color: '#00000061',
                fontWeight: 'bold',
              }}
              onClick={props.handleCloseAlertModal}
              autoFocus
            >
              Cancelar
            </Button>
          </BoxContainerControl>
        </BoxContainer>
      </Modal>
    </>
  )
}
