import {
  HeaderContainer,
  HeaderContent,
  InfoContainer,
  LogoAndNavContainer,
  LogoContainer,
  NavContainer,
} from './styles'

import logoOrangePortfolio from '../../assets/logoOrangePortfolio.png'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { Link } from 'react-router-dom'
import { Badge, IconButton, Tooltip } from '@mui/material'
import AccountMenu from './Avatar'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoAndNavContainer>
          <LogoContainer>
            <img src={logoOrangePortfolio} alt="" />
          </LogoContainer>

          <NavContainer>
            <ul>
              <li>
                <Link to="/meus-projetos">Meus projetos</Link>
              </li>
              <li>
                <Link to="/descobrir">Descobrir</Link>
              </li>
            </ul>
          </NavContainer>
        </LogoAndNavContainer>
        <InfoContainer>
          <AccountMenu />
          <Tooltip title="Notificações">
            <IconButton>
              <Badge badgeContent={985} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
        </InfoContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
