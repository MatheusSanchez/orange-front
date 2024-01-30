import { Collections } from '@mui/icons-material'
import { Button, Modal, TextField } from '@mui/material'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { OpenModalViewProject } from '../../OpenModalViewProject'
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
  const [projectInfo, setProjectInfo] = useState({
    title: '',
    tags: '',
    link: '',
    description: '',
  })

  const [imageBanner, setImageBanner] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setProjectInfo((prev) => ({ ...prev, [name]: value }))
  }

  function handleChangePreview(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]

    if (file) {
      const imagePreview = URL.createObjectURL(file)
      props.setPreview(imagePreview)
      setImageBanner(imagePreview)
    }
  }

  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
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
                value={projectInfo.title}
                onChange={handleChange}
              />

              <TextField
                variant="outlined"
                required
                fullWidth
                type="text"
                id="tags"
                name="tags"
                label="Tags"
                value={projectInfo.tags}
                onChange={handleChange}
              />

              <TextField
                variant="outlined"
                fullWidth
                type="text"
                id="link"
                name="link"
                label="Link"
                value={projectInfo.link}
                onChange={handleChange}
              />

              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                id="description"
                name="description"
                label="Descrição"
                value={projectInfo.description}
                onChange={handleChange}
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

          <a style={{ cursor: 'pointer' }} onClick={handleOpenModal}>
            Visualizar publicação
          </a>

          <ButtonsContainer>
            <Button
              variant="contained"
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
