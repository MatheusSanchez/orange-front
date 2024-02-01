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
import { api } from '../../../lib/axios'
import {
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

interface ModalCreateNewProjectProps {
  open: boolean
  preview: string | undefined
  setPreview: React.Dispatch<React.SetStateAction<string | undefined>>
  handleClose: () => void
}

const newProjectFormSchema = z.object({
  title: z
    .string()
    .min(5, 'Mínimo de 3 caracteres')
    .max(50, 'Máximo 50 caracteres'),
  tags: z
    .array(z.string())
    .refine((tags) => tags.length <= 3, {
      message: 'Você só pode inserir até 3 tags',
    })
    .refine((tags) => tags.every((tag) => tag.length <= 12), {
      message: 'Cada tag deve ter no máximo 12 caracteres',
    }),
  link: z.string(),
  description: z.string(),
})

type NewProjectFormSchema = z.infer<typeof newProjectFormSchema>

export function ModalCreateNewProject(props: ModalCreateNewProjectProps) {
  const { userData } = useAuth()

  const [loadingAuth, setLoadingAuth] = useState(false)

  const { openErrorModal, openCreateModal } = useModalContext()
  const errorModal = () => openErrorModal()
  const createModal = () => openCreateModal()

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
      const imagePreview = URL.createObjectURL(file)
      props.setPreview(imagePreview)
    }
  }

  async function handleCreateNewProject(data: NewProjectFormSchema) {
    setLoadingAuth(true)
    try {
      await newProjectFormSchema.parseAsync(data)
      await api
        .post(`/user/${userData?.user.id}/project`, {
          userId: userData?.user.id,
          title: data.title,
          tags: data.tags,
          link: data.link,
          description: data.description,
        })
        .then(() => {
          createModal()
        })
    } catch (error) {
      errorModal()
    } finally {
      reset()
      setLoadingAuth(false)
      props.handleClose()
    }
  }

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="Adicionar projeto"
    >
      <ModalBox>
        <Helmet title="Adicionar projeto" />
        <h2>Adicionar projeto</h2>
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
                          .filter((tag) => tag !== '') // Remove tags vazias
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
                placeholder="Exemplo: https://www.linkedin.com/in/pedrodecf"
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
                placeholder="Exemplo: Os integrantes do squad 40 são sensacionais"
                {...register('description')}
              />
            </InputsContainer>

            <UploadFileContent>
              <p>Selecione o conteúdo que você deseja fazer upload</p>
              <UploadFileInput>
                <img src={props.preview} alt="" />
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
            </UploadFileContent>
          </MainContainer>
          <span>Visualizar publicação</span>

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
      </ModalBox>
    </Modal>
  )
}
