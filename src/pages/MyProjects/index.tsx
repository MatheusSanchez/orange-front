import { Helmet } from 'react-helmet-async'
import React, { useState } from 'react'
import { CardProfile } from '../../components/CardProfile'
import { Typography } from '@mui/material'
import { SearchTags } from '../../components/SearchTags'
import { UploadFileContent, UploadFileInput } from './styles'

import insertImage from '../../assets/insertProjects.png'
import { ModalCreateNewProject } from '../../components/ModalCreateNewProject'

export function MyProjects() {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <React.Fragment>
      <Helmet title="Meus Projetos" />
      <CardProfile />

      <Typography variant="h5" component="h5">
        Meus Projetos
      </Typography>
      <SearchTags />
      <UploadFileContent>
        <UploadFileInput>
          <img src={insertImage} alt="" onClick={handleOpenModal} />
        </UploadFileInput>
      </UploadFileContent>

      <ModalCreateNewProject open={openModal} handleClose={handleCloseModal} />
    </React.Fragment>
  )
}
