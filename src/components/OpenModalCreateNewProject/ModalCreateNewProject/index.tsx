import { zodResolver } from '@hookform/resolvers/zod'
import { Collections } from '@mui/icons-material'
import { Modal, TextField } from '@mui/material'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { TailSpin } from 'react-loader-spinner'
import { z } from 'zod'

import { useModalContext } from '../../../contexts/ModalContext'
import { useAuth } from '../../../hooks/auth'
import { ProjectProps } from '../../../interfaces/ProjectProps'
import { api } from '../../../lib/axios'
import { OpenModalViewProject } from '../../OpenModalViewProject'
import {
  ButtonsContainer,
  ErrorMessage,
  FormContainer,
  InputsContainer,
  LabelContent,
  MainContainer,
  ModalBox,
  ShowProject,
  StyledButton,
  UploadFileContent,
  UploadFileInput,
} from './styles'

interface ModalCreateNewProjectProps {
  open: boolean
  preview: string | undefined
  setPreview: React.Dispatch<React.SetStateAction<string | undefined>>
  handleClose: () => void
  isEditProject?: boolean
  projectProps?: ProjectProps
}

const newProjectFormSchema = z.object({
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

type NewProjectFormSchema = z.infer<typeof newProjectFormSchema>

export function ModalCreateNewProject(props: ModalCreateNewProjectProps) {
  const { userData } = useAuth()

  const [loadingAuth, setLoadingAuth] = useState(false)
  const [imgFile, setImgFile] = useState<File | null>(null)
  const [openModal, setOpenModal] = useState(false)
  const [imageBanner, setImageBanner] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [projectInfo, setProjectInfo] = useState({
    title: '',
    tags: '',
    link: '',
    description: '',
    createdAt: '',
  })

  const { openErrorModal, openCreateModal } = useModalContext()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setProjectInfo((prev) => ({ ...prev, [name]: value }))
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewProjectFormSchema>({
    resolver: zodResolver(newProjectFormSchema),
  })

  function handleChangeImgPreview(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (file) {
      setImgFile(file)

      const imagePreview = URL.createObjectURL(file)
      props.setPreview(imagePreview)
      setImageBanner(imagePreview)
    }
  }

  async function handleCreateNewProject(data: NewProjectFormSchema) {
    if (imgFile === null) {
      setErrorMessage('A imagem é obrigatória')
      return
    }

    setLoadingAuth(true)
    try {
      await newProjectFormSchema.parseAsync(data)

      const res = await api.post(`/user/${userData?.user.id}/project`, {
        userId: userData?.user.id,
        title: data.title,
        tags: data.tags,
        link: data.link,
        description: data.description,
      })

      if (imgFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', imgFile)
        await api.post(`/project/${res.data.project.id}/photo`, fileUploadForm)
      }
      openCreateModal()
    } catch (error) {
      openErrorModal()
    } finally {
      reset()
      setLoadingAuth(false)
      props.handleClose()
    }
  }

  function handleOpenModal() {
    setOpenModal(true)
  }

  const titleText = props.isEditProject ? 'Editar projeto' : 'Adicionar projeto'

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby={titleText}
    >
      <ModalBox>
        <Helmet title={titleText} />
        <h2>{titleText}</h2>
        <FormContainer onSubmit={handleSubmit(handleCreateNewProject)}>
          <MainContainer>
            <InputsContainer>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="text"
                id="title"
                label="Título"
                placeholder="Exemplo: FCamara é a melhor"
                {...register('title')}
                value={projectInfo.title}
                onChange={handleChange}
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
                placeholder="Exemplo: node, react, figma"
                {...register('tags', {
                  setValueAs: (value) =>
                    typeof value === 'string'
                      ? value
                          .split(',')
                          .map((tag) => tag.trim())
                          .filter((tag) => tag !== '')
                      : value,
                })}
                value={projectInfo.tags}
                onChange={handleChange}
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
                placeholder="Exemplo: https://www.linkedin.com/in/pedrodecf"
                {...register('link')}
                value={projectInfo.link}
                onChange={handleChange}
              />

              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                rows={4}
                id="description"
                label="Descrição"
                placeholder="Exemplo: Os integrantes do squad 40 são sensacionais"
                {...register('description')}
                value={projectInfo.description}
                onChange={handleChange}
              />
            </InputsContainer>

            <UploadFileContent>
              <p>Selecione o conteúdo que você deseja fazer upload</p>
              <UploadFileInput>
                <img src={props.preview} alt="Prévia da Imagem" />
                <input
                  type="file"
                  name="chooseFile"
                  id="chooseFile"
                  onChange={handleChangeImgPreview}
                />
                <label htmlFor="chooseFile">
                  <LabelContent
                    style={{ opacity: props.preview !== undefined ? 0 : 1 }}
                  >
                    <Collections
                      sx={{
                        height: 46,
                        width: 46,
                        fill: '#323232',
                      }}
                    />
                    <p>Compartilhe seu talento com milhares de pessoas</p>
                  </LabelContent>
                </label>
              </UploadFileInput>
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </UploadFileContent>
          </MainContainer>
          <ShowProject onClick={handleOpenModal}>
            Visualizar publicação
          </ShowProject>

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
              onClick={props.handleClose}
            >
              Cancelar
            </StyledButton>
          </ButtonsContainer>
        </FormContainer>
        <OpenModalViewProject
          openModal={openModal}
          setOpenModal={setOpenModal}
          projectInfo={projectInfo}
          imageBanner={imageBanner}
        />
      </ModalBox>
    </Modal>
  )
}
