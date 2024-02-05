import { zodResolver } from '@hookform/resolvers/zod'
import { TextField } from '@mui/material'
import Modal from '@mui/material/Modal'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { TailSpin } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import errorSvg from '../../assets/error.svg'
import sucessSvg from '../../assets/sucess.svg'
import { useModalContext } from '../../contexts/ModalContext'
import { useAuth } from '../../hooks/auth'
import { api } from '../../lib/axios'
import {
  AlertContainer,
  BoxContainer,
  BoxContainerControl,
  ButtonsContainer,
  ErrorMessage,
  FormContainer,
  InputsContainer,
  LabelContent,
  MainContainer,
  ModalBox,
  StyledButton,
  UploadFileContent,
  UploadFileInput,
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

const editProjectFormSchema = z.object({
  title: z
    .string()
    .min(3, 'Mínimo de 3 caracteres')
    .max(50, 'Máximo 50 caracteres'),
  tags: z
    .array(z.string())
    .refine((tags) => tags.length <= 2, {
      message: 'Limite máximo de 2 tags',
    })
    .refine((tags) => tags.every((tag) => tag.length <= 12), {
      message: 'A tag não pode ter mais de 12 caracteres',
    }),
  link: z.string(),
  description: z.string(),
})

type EditProjectFormSchema = z.infer<typeof editProjectFormSchema>

export function EditProjectModal() {
  const { userData } = useAuth()
  const {
    editProjectModalState,
    closeEditProjectModal,
    projectIdToBeEdited,
    openEditModal,
    projectData,
  } = useModalContext()
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [imgFile, setImgFile] = useState<File | null>(null)
  const [imgPreview, setImgPreview] = useState<string | undefined>(undefined)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EditProjectFormSchema>({
    resolver: zodResolver(editProjectFormSchema),
  })

  async function editProject(data: EditProjectFormSchema) {
    setLoadingAuth(true)
    try {
      const res = await api.put(`/project/${projectIdToBeEdited}/edit`, {
        userId: userData?.user.id,
        title: data.title,
        tags: data.tags,
        link: data.link,
        description: data.description,
      })
      if (imgFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', imgFile)
        await api
          .post(`/project/${res.data.project.id}/photo`, fileUploadForm)
          .then(() => {
            openEditModal()
          })
      }
    } catch (error) {
      console.error('Erro ao processar a requisição', error)
      throw error
    } finally {
      setLoadingAuth(false)
      closeEditProjectModal()
    }
  }

  function handleChangeImgPreview(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (file) {
      setImgFile(file)
      const imagePreview = URL.createObjectURL(file)
      setImgPreview(imagePreview)
    }
  }

  useEffect(() => {
    try {
      if (projectData) {
        const projectDataForEdit = projectData

        setImgPreview(projectDataForEdit.photo_url)

        Object.keys(projectDataForEdit).forEach((key) => {
          if (key in projectDataForEdit) {
            setValue(
              key as 'title' | 'tags' | 'link' | 'description',
              projectDataForEdit[
                key as 'title' | 'tags' | 'link' | 'description'
              ],
            )
          }
        })
      }
    } catch (error) {
      console.error('Error fetching project data', error)
    }
  }, [projectData])

  return (
    <Modal open={editProjectModalState} onClose={closeEditProjectModal}>
      <ModalBox>
        <Helmet title="Editar projeto" />
        <h2>Editar projeto</h2>
        <FormContainer onSubmit={handleSubmit(editProject)}>
          <MainContainer>
            <InputsContainer>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="text"
                id="title"
                label="Título"
                InputLabelProps={{
                  shrink: true,
                }}
                {...register('title')}
              />

              {errors.title && (
                <ErrorMessage>{errors.title.message}</ErrorMessage>
              )}

              <TextField
                variant="outlined"
                required
                fullWidth
                type="text"
                id="tags"
                label="Tags"
                InputLabelProps={{
                  shrink: true,
                }}
                {...register('tags', {
                  setValueAs: (value) =>
                    typeof value === 'string'
                      ? value
                          .split(',')
                          .map((tag) => tag.trim())
                          .filter((tag) => tag !== '')
                      : value,
                })}
              />

              {errors.tags && (
                <ErrorMessage>{errors.tags.message}</ErrorMessage>
              )}

              <TextField
                variant="outlined"
                required
                fullWidth
                type="text"
                id="link"
                label="Link"
                InputLabelProps={{
                  shrink: true,
                }}
                {...register('link')}
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                rows={4}
                id="description"
                label="Descrição"
                InputLabelProps={{
                  shrink: true,
                }}
                {...register('description')}
              />
            </InputsContainer>
            <UploadFileContent>
              <p>Selecione o conteúdo que você deseja fazer upload</p>
              <UploadFileInput>
                <img src={imgPreview} alt="" />
                <input
                  type="file"
                  name="chooseFile"
                  id="chooseFile"
                  onChange={handleChangeImgPreview}
                />
                <label htmlFor="chooseFile">
                  <LabelContent
                    style={{ opacity: imgPreview !== undefined ? 0 : 1 }}
                  >
                    <p>Compartilhe seu talento com milhares de pessoas</p>
                  </LabelContent>
                </label>
              </UploadFileInput>
            </UploadFileContent>
          </MainContainer>
          <a style={{ cursor: 'pointer' }}>Visualizar publicação</a>
          <ButtonsContainer>
            <StyledButton
              textcollor="save"
              buttoncolor="save"
              variant="contained"
              type="submit"
              disabled={loadingAuth}
              startIcon={
                loadingAuth ? (
                  <TailSpin width={12} height={12} color="#00000061" />
                ) : null
              }
            >
              {loadingAuth ? 'Salvando' : 'Salvar'}
            </StyledButton>

            <StyledButton
              textcollor="cancel"
              buttoncolor="cancel"
              variant="contained"
              onClick={closeEditProjectModal}
            >
              Cancelar
            </StyledButton>
          </ButtonsContainer>
        </FormContainer>
      </ModalBox>
    </Modal>
  )
}
