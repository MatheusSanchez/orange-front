import { createContext, ReactNode, useState } from 'react'

import { api } from '../lib/axios'

interface UserProps {
  id: string
  name: string
  surname: string
  email: string
  password_hash: string
  created_at: string
  updated_at: string
}

interface AuthContextType {
  handleSignIn: (emailQ: string, passwordQ: string) => void
  userInfo?: UserProps
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [userInfo, setUserInfo] = useState<UserProps>()
  async function handleSignIn(emailQ: string, passwordQ: string) {
    try {
      console.log('passou')
      const res = await api.post('/login', {
        email: emailQ,
        password: passwordQ,
      })
      setUserInfo(res.data.user)
    } catch (error) {
      console.error('Erro ao processar a requisição', error) // this needs to be improved
    }
  }

  return (
    <AuthContext.Provider value={{ handleSignIn, userInfo }}>
      {children}
    </AuthContext.Provider>
  )
}
