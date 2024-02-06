import { Menu as MenuIcon } from '@mui/icons-material'
import { Divider, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function MenuMobile() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    event.stopPropagation()
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const navigate = useNavigate()
  return (
    <>
      <Tooltip title="Menu">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <MenuIcon sx={{ color: '#fff' }} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 2,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => navigate('/meus-projetos')}>
          Meus Projetos
        </MenuItem>
        <MenuItem onClick={() => navigate('/descobrir')}>Descobrir</MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem>Configurações</MenuItem>
      </Menu>
    </>
  )
}
