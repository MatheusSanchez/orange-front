import { Collections } from '@mui/icons-material'
import { Button, Modal, TextField } from '@mui/material'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { useAuth } from '../../../hooks/auth'
import { api } from '../../../lib/axios'
import {
  ButtonsContainer,
  FormContainer,
  InputsContainer,
  LabelContent,
  MainContainer,
  ModalBox,
  UploadFileContent,
  UploadFileInput,
} from './styles'

interface ModalCreateNewProjectProps {
  open: boolean
  preview: string | undefined
  setPreview: React.Dispatch<React.SetStateAction<string | undefined>>
  handleClose: () => void
}

export function ModalCreateNewProject(props: ModalCreateNewProjectProps) {
  // const [imgPortfolio, setImgPortfolio] = useState<File | null>(null)
  const [tags, setTags] = useState<string[]>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')

  function handleChangePreview(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]

    if (file) {
      const imagePreview = URL.createObjectURL(file)
      props.setPreview(imagePreview)
      // setImgPortfolio(file)
    }
  }

  const { userData } = useAuth()

  async function handleCreateNewProject() {
    await api.post(`/user/${userData?.user.id}/project`, {
      userId: userData?.user.id,
      title,
      tags,
      link,
      description,
    })

    // if (imgPortfolio) {
    //   const fileUploadForm = new FormData()
    //   fileUploadForm.append('avatar', imgPortfolio)

    //   await api.post(`/project/${res.data.project.id}/photo`, {
    //     avatar: fileUploadForm,
    //   })
    // }
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
        <FormContainer>
          <MainContainer>
            <InputsContainer>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="text"
                id="title"
                name="title"
                label="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <TextField
                variant="outlined"
                required
                fullWidth
                type="text"
                id="tags"
                name="tags"
                label="Tags"
                value={tags.join(',')}
                onChange={(e) => setTags(e.target.value.split(','))}
              />

              <TextField
                variant="outlined"
                fullWidth
                type="text"
                id="link"
                name="link"
                label="Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />

              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                id="description"
                name="description"
                label="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                  accept="image/*, .png, .jpg"
                  required
                  onChange={handleChangePreview}
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
                        cursor: 'pointer',
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
            <Button
              variant="contained"
              onClick={handleCreateNewProject}
              style={{
                backgroundColor: '#f32',
                fontWeight: 'bold',
              }}
            >
              Salvar
            </Button>

            <Button
              variant="contained"
              onClick={props.handleClose}
              style={{
                backgroundColor: '#0000001f',
                color: '#00000061',
                fontWeight: 'bold',
              }}
            >
              Cancelar
            </Button>
          </ButtonsContainer>
        </FormContainer>
      </ModalBox>
    </Modal>
  )
}
