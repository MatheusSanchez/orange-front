import { Button } from '@mui/material'
import { useState } from 'react'

import { ModalCreateNewProject } from '../ModalCreateNewProject'
import { ButtonAndModalContainer } from './styles'

export function ButtonAndModal() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)

  function handleClose() {
    setOpen(false)
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
      <ModalCreateNewProject open={open} handleClose={handleClose} />
    </ButtonAndModalContainer>
  )
}
