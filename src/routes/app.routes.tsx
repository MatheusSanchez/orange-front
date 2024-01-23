import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from '../pages/_layout/app'
import { MeusProjetos } from '../pages/MeusProjetos'
import { Descobrir } from '../pages/Descobrir'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/meus-projetos" element={<MeusProjetos />} />,
        <Route path="/descobrir" element={<Descobrir />} />,
        <Route path="*" element={<Navigate to="/descobrir" />} />
      </Route>
    </Routes>
  )
}
