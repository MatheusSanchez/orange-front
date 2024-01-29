import { Collections } from '@mui/icons-material'
import { Button, Modal, TextField } from '@mui/material'
import { Helmet } from 'react-helmet-async'

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
  function handleChangePreview(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]

    if (file) {
      const imagePreview = URL.createObjectURL(file)
      props.setPreview(imagePreview)
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
              />

              <TextField
                variant="outlined"
                required
                fullWidth
                type="text"
                id="tags"
                name="tags"
                label="Tags"
              />

              <TextField
                variant="outlined"
                fullWidth
                type="text"
                id="link"
                name="link"
                label="Link"
              />

              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                id="description"
                name="description"
                label="Descrição"
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
