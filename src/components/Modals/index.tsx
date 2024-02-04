import Modal from '@mui/material/Modal'
import { useNavigate } from 'react-router-dom'

import errorSvg from '../../assets/error.svg'
import sucessSvg from '../../assets/sucess.svg'
import { useModalContext } from '../../contexts/ModalContext'
import { api } from '../../lib/axios'
import {
  AlertContainer,
  BoxContainer,
  BoxContainerControl,
  StyledButton,
} from './styles'

export function EditModalSucess() {
  const { editModalState, closeEditModal } = useModalContext()
  const navigate = useNavigate()

  const handleCloseModal = () => {
    closeEditModal()
    navigate(0)
  }

  return (
    <Modal open={editModalState} onClose={closeEditModal}>
      <BoxContainer>
        <h2>Edição concluída com sucesso!</h2>
        <img src={sucessSvg} alt="" />
        <StyledButton
          buttoncolor="save"
          textcollor="save"
          variant="contained"
          onClick={handleCloseModal}
        >
          Voltar para projetos
        </StyledButton>
      </BoxContainer>
    </Modal>
  )
}

export function CreateModalSucess() {
  const { createModalState, closeCreateModal } = useModalContext()
  const navigate = useNavigate()

  const handleCloseModal = () => {
    closeCreateModal()
    navigate(0)
  }

  return (
    <Modal open={createModalState} onClose={closeCreateModal}>
      <BoxContainer>
        <h2>Criação concluída com sucesso!</h2>
        <img src={sucessSvg} alt="" />
        <StyledButton
          buttoncolor="save"
          textcollor="save"
          variant="contained"
          onClick={handleCloseModal}
        >
          Voltar para projetos
        </StyledButton>
      </BoxContainer>
    </Modal>
  )
}

export function DeleteModalSucess() {
  const { deleteModalState, closeDeleteModal } = useModalContext()
  const navigate = useNavigate()

  const handleCloseModal = () => {
    closeDeleteModal()
    navigate(0)
  }

  return (
    <Modal open={deleteModalState} onClose={closeDeleteModal}>
      <BoxContainer>
        <h2>Exclusão concluída com sucesso!</h2>
        <img src={sucessSvg} alt="" />
        <StyledButton
          buttoncolor="save"
          textcollor="save"
          variant="contained"
          onClick={handleCloseModal}
        >
          Voltar para projetos
        </StyledButton>
      </BoxContainer>
    </Modal>
  )
}

export function UpdateProfileSucess() {
  const { updateProfileModalState, closeUpdateProfileModal } = useModalContext()
  const navigate = useNavigate()

  const handleCloseModal = () => {
    closeUpdateProfileModal()
    navigate(0)
  }

  return (
    <Modal open={updateProfileModalState} onClose={closeUpdateProfileModal}>
      <BoxContainer>
        <h2>Perfil atualizado com sucesso!</h2>
        <img src={sucessSvg} alt="" />
        <StyledButton
          buttoncolor="save"
          textcollor="save"
          variant="contained"
          onClick={handleCloseModal}
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
  const navigate = useNavigate()

  const handleCloseModal = () => {
    closeAlertErrorModal()
    navigate(0)
  }
  return (
    <Modal open={alertErrorModalState} onClose={closeAlertErrorModal}>
      <BoxContainer>
        <h2>Ops! Algo deu errado. Por favor, tente novamente!</h2>
        <img src={errorSvg} alt="" />
        <StyledButton
          buttoncolor="save"
          textcollor="save"
          variant="contained"
          onClick={handleCloseModal}
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
  const {
    alertModalState,
    closeAlertModal,
    openDeleteModal,
    projectIdToBeDeleted,
  } = useModalContext()

  const handleOpenDelete = () => {
    closeAlertModal()
    deleteProject()
  }

  async function deleteProject() {
    try {
      await api.delete(`/project/${projectIdToBeDeleted}`).then(() => {
        openDeleteModal()
      })
    } catch (error) {
      console.error('Erro ao processar a requisição', error)
      throw error
    }
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
            onClick={handleOpenDelete}
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
