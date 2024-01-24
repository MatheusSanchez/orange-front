import { useState } from 'react'
import { Button, Modal, TextField } from '@mui/material'
import {
  ButtonAndModalContainer,
  ButtonsContainer,
  FormContainer,
  InputsContainer,
  LabelContent,
  MainContainer,
  ModalBox,
  UploadFileContent,
  UploadFileInput,
} from './styles'
import { Collections } from '@mui/icons-material'

export function ButtonAndModal() {
  const [open, setOpen] = useState(false)
  const [preview, setPreview] = useState<string | undefined>(undefined)
  const handleOpen = () => setOpen(true)

  function handleClose() {
    setOpen(false)
    setPreview(undefined)
  }

  function handleChangePreview(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]

    if (file) {
      const imagePreview = URL.createObjectURL(file)
      setPreview(imagePreview)
    }
  }

  return (
    <ButtonAndModalContainer>
      <Button
        variant="contained"
        onClick={handleOpen}
        style={{
          backgroundColor: '#0000001f',
          color: '#00000061',
          fontWeight: 'bold',
        }}
      >
        Adicionar projeto
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Adicionar projeto"
      >
        <ModalBox>
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
                  <img src={preview} alt="" />
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
                      style={{ opacity: preview !== undefined ? 0 : 1 }}
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
                onClick={handleClose}
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
    </ButtonAndModalContainer>
  )
}
