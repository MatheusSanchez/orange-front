import { isAxiosError } from 'axios'
import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { useAuth } from '../hooks/auth'
import { api } from '../lib/axios'
import { AppLayout } from '../pages/_layout/app'
import { EditProfile } from '../pages/EditProfile'
import { Feed } from '../pages/Feed'
import { MyProjects } from '../pages/MyProjects'
import { Settings } from '../pages/Settings'

export function AppRoutes() {
  const { Logout } = useAuth()

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status

          if (status === 401) {
            Logout()
          }
        }
      },
    )

    return () => {
      api.interceptors.response.eject(interceptorId)
    }
  }, [Logout])

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/meus-projetos" element={<MyProjects />} />,
        <Route path="/descobrir" element={<Feed />} />,
        <Route path="/editar-perfil" element={<EditProfile />} />,
        <Route path="/configuracoes" element={<Settings />} />,
        <Route path="/" element={<Navigate to="/meus-projetos" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}
