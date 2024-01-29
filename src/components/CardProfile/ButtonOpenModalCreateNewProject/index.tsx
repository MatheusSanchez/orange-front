import { useState } from 'react'

import { OpenModalCreateNewProject } from '../../OpenModalCreateNewProject'
import { ButtonContainer, StyledButton } from './styles'

export function ButtonOpenModalCreateNewProject() {
  const [openModal, setOpenModal] = useState(false)
  const handleOpen = () => setOpenModal(true)

  return (
    <ButtonContainer>
      <StyledButton variant="contained" onClick={handleOpen}>
        Adicionar projeto
      </StyledButton>

      <OpenModalCreateNewProject
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </ButtonContainer>
  )
}
