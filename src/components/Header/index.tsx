import NotificationsIcon from '@mui/icons-material/Notifications'
import { Badge, IconButton, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'

import logoOrangePortfolio from '../../assets/logoOrangePortfolio.png'
import AccountMenu from './Avatar'
import { MenuMobile } from './MenuMobile'
import {
  HeaderContainer,
  HeaderContent,
  InfoContainer,
  LogoAndNavContainer,
  LogoContainer,
  NavContainer,
  NavContainerMobile,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoAndNavContainer>
          <NavContainerMobile>
            <MenuMobile />
          </NavContainerMobile>
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
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
        </InfoContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
