import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/auth'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const { userData } = useAuth()
  console.log(userData?.token)
  return (
    <BrowserRouter>
      {userData?.token ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}
