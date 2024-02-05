import CreateIcon from '@mui/icons-material/Create'
import Fade from '@mui/material/Fade'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'

import { useModalContext } from '../../../contexts/ModalContext'
import { ProjectProps } from '../../../interfaces/ProjectProps'

interface OptionsButtonProps {
  project_id: string | undefined
  project?: ProjectProps
}

export function OptionsButton(props: OptionsButtonProps) {
  const { openAlertModal, openEditProjectModal } = useModalContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }

  function wantToDelete(event: React.MouseEvent<HTMLElement>) {
    event.stopPropagation()
    openAlertModal(props.project_id)
  }

  function handleOpenModalForEditProject(event: React.MouseEvent<HTMLElement>) {
    event.stopPropagation()
    openEditProjectModal(props.project_id)
  }

  return (
    <>
      <IconButton
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <CreateIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        onClick={(event) => {
          event.stopPropagation()
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        TransitionComponent={Fade}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem
          sx={{ minWidth: 180 }}
          onClick={handleOpenModalForEditProject}
        >
          Editar
        </MenuItem>
        <MenuItem sx={{ minWidth: 180 }} onClick={wantToDelete}>
          Excluir
        </MenuItem>
      </Menu>
    </>
  )
}
