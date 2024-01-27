import { Navigate, Route, Routes } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AuthRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/cadastro" element={<SignUp />} />,
        <Route path="/login" element={<SignIn />} />,
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  )
}
