import { useState } from 'react'

import { ModalCreateNewProject } from './ModalCreateNewProject'

interface ModalState {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export function OpenModalCreateNewProject(props: ModalState) {
  const [preview, setPreview] = useState<string | undefined>(undefined)

  const handleCloseModal = () => {
    props.setOpenModal(false)
    setPreview(undefined)
  }

  return (
    <ModalCreateNewProject
      open={props.openModal}
      handleClose={handleCloseModal}
      preview={preview}
      setPreview={setPreview}
    />
  )
}
