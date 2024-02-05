import { useState } from 'react'

import { ModalViewProject } from './ModalViewProject'

interface ModalState {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  projectInfo: {
    title: string
    tags: string
    link: string
    description: string
    date?: string
    avatar?: string
    author?: string
  }
  imageBanner: string
}

export function OpenModalViewProject(props: ModalState) {
  const [preview, setPreview] = useState<string | undefined>(undefined)

  const handleCloseModal = () => {
    props.setOpenModal(false)
    setPreview(undefined)
  }

  return (
    <ModalViewProject
      open={props.openModal}
      handleClose={handleCloseModal}
      preview={preview}
      setPreview={setPreview}
      projectInfo={props.projectInfo}
      imageBanner={props.imageBanner}
    />
  )
}
