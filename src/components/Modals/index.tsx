import Modal from '@mui/material/Modal'

import errorSvg from '../../assets/error.svg'
import sucessSvg from '../../assets/sucess.svg'
import { useModalContext } from '../../contexts/ModalContext'
import {
  AlertContainer,
  BoxContainer,
  BoxContainerControl,
  StyledButton,
} from './styles'

export function EditModalSucess() {
  const { editModalState, closeEditModal } = useModalContext()
  return (
    <Modal open={editModalState} onClose={closeEditModal}>
      <BoxContainer>
        <h2>Edição concluída com sucesso!</h2>
        <img src={sucessSvg} alt="" />
        <StyledButton
          buttoncolor="save"
          textcollor="save"
          variant="contained"
          onClick={closeEditModal}
        >
          Voltar para projetos
        </StyledButton>
      </BoxContainer>
    </Modal>
  )
}

export function CreateModalSucess() {
  const { createModalState, closeCreateModal } = useModalContext()
  return (
    <Modal open={createModalState} onClose={closeCreateModal}>
      <BoxContainer>
        <h2>Criação concluída com sucesso!</h2>
        <img src={sucessSvg} alt="" />
        <StyledButton
          buttoncolor="save"
          textcollor="save"
          variant="contained"
          onClick={closeCreateModal}
        >
          Voltar para projetos
        </StyledButton>
      </BoxContainer>
    </Modal>
  )
}

export function DeleteModalSucess() {
  const { deleteModalState, closeDeleteModal } = useModalContext()
  return (
    <Modal open={deleteModalState} onClose={closeDeleteModal}>
      <BoxContainer>
        <h2>Exclusão concluída com sucesso!</h2>
        <img src={sucessSvg} alt="" />
        <StyledButton
          buttoncolor="save"
          textcollor="save"
          variant="contained"
          onClick={closeDeleteModal}
        >
          Voltar para projetos
        </StyledButton>
      </BoxContainer>
    </Modal>
  )
}

export function UpdateProfileSucess() {
  const { updateProfileModalState, closeUpdateProfileModal } = useModalContext()
  return (
    <Modal open={updateProfileModalState} onClose={closeUpdateProfileModal}>
      <BoxContainer>
        <h2>Perfil atualizado com sucesso!</h2>
        <img src={sucessSvg} alt="" />
        <StyledButton
          buttoncolor="save"
          textcollor="save"
          variant="contained"
          onClick={closeUpdateProfileModal}
        >
          Confirmar
        </StyledButton>
      </BoxContainer>
    </Modal>
  )
}

export function ChangePasswordSucess() {
  const { changePasswordModalState, closeChangePasswordModal } =
    useModalContext()
  return (
    <Modal open={changePasswordModalState} onClose={closeChangePasswordModal}>
      <BoxContainer>
        <h2>Senha atualizada com sucesso!</h2>
        <img src={sucessSvg} alt="" />
        <StyledButton
          buttoncolor="save"
          textcollor="save"
          variant="contained"
          onClick={closeChangePasswordModal}
        >
          Confirmar
        </StyledButton>
      </BoxContainer>
    </Modal>
  )
}

export function AlertError() {
  const { alertErrorModalState, closeAlertErrorModal } = useModalContext()
  return (
    <Modal open={alertErrorModalState} onClose={closeAlertErrorModal}>
      <BoxContainer>
        <h2>Ops! Algo deu errado. Por favor, tente novamente!</h2>
        <img src={errorSvg} alt="" />
        <StyledButton
          buttoncolor="save"
          textcollor="save"
          variant="contained"
          onClick={closeAlertErrorModal}
        >
          Confirmar
        </StyledButton>
      </BoxContainer>
    </Modal>
  )
}

export function ErrorModal() {
  const { errorModalState, closeErrorModal } = useModalContext()
  return (
    <Modal open={errorModalState} onClose={closeErrorModal}>
      <BoxContainer>
        <h2>Ocorreu um erro, tente novamente!</h2>
        <img src={errorSvg} alt="" />
        <StyledButton
          buttoncolor="save"
          textcollor="save"
          variant="contained"
          onClick={closeErrorModal}
        >
          Voltar para projetos
        </StyledButton>
      </BoxContainer>
    </Modal>
  )
}

export function AlertModal() {
  const { alertModalState, closeAlertModal, openDeleteModal } =
    useModalContext()

  const handleDeleteProjectModal = () => {
    closeAlertModal()
    openDeleteModal()
  }

  return (
    <Modal open={alertModalState} onClose={closeAlertModal}>
      <AlertContainer>
        <h2>Deseja Excluir?</h2>
        <span>Se você prosseguir irá excluir o projeto do seu portfólio</span>
        <BoxContainerControl>
          <StyledButton
            variant="contained"
            buttoncolor="save"
            textcollor="save"
            onClick={handleDeleteProjectModal}
          >
            Excluir
          </StyledButton>
          <StyledButton
            variant="contained"
            buttoncolor="cancel"
            textcollor="cancel"
            onClick={closeAlertModal}
            autoFocus
          >
            Cancelar
          </StyledButton>
        </BoxContainerControl>
      </AlertContainer>
    </Modal>
  )
}
