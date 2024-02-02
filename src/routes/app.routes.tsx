import { Navigate, Route, Routes } from 'react-router-dom'

import { AppLayout } from '../pages/_layout/app'
import { EditProfile } from '../pages/EditProfile'
import { Feed } from '../pages/Feed'
import { MyProjects } from '../pages/MyProjects'
import { Settings } from '../pages/Settings'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/meus-projetos" element={<MyProjects />} />,
        <Route path="/descobrir" element={<Feed />} />,
        <Route path="/editar-perfil" element={<EditProfile />} />,
        <Route path="/configuracoes" element={<Settings />} />,
        <Route path="*" element={<Navigate to="/meus-projetos" />} />
      </Route>
    </Routes>
  )
}
