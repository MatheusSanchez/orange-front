import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from '../pages/_layout/app'
import { MyProjects } from '../pages/MyProjects'
import { Feed } from '../pages/Feed'
import { SignUp } from '../pages/SignUp'

export function AppRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/cadastro" element={<SignUp />} />,
      </Route>
      ,
      <Route element={<AppLayout />}>
        <Route path="/meus-projetos" element={<MyProjects />} />,
        <Route path="/descobrir" element={<Feed />} />,
        <Route path="*" element={<Navigate to="/descobrir" />} />
      </Route>
    </Routes>
  )
}
