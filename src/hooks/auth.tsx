import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { api } from '../lib/axios'

interface UserProps {
  id?: string
  name?: string
  surname?: string
  email?: string
  // password_hash: string
  created_at?: string
  updated_at?: string
}

interface AuthContextType {
  userData?: { user: UserProps; token: string }
  handleSignIn: (emailQ: string, passwordQ: string) => void
  handleSignOut: () => void
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUserData] = useState<{ user: UserProps; token: string }>({
    user: {} as UserProps,
    token: '',
  })

  async function handleSignIn(emailQ: string, passwordQ: string) {
    try {
      const res = await api.post('/login', {
        email: emailQ,
        password: passwordQ,
      })

      const { user, token } = res.data

      localStorage.setItem('@squad40:user', JSON.stringify(user))
      localStorage.setItem('@squad40:token', token)

      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setUserData({ user, token })
    } catch (error) {
      console.error('Erro ao processar a requisição', error) // this needs to be improved
    }
  }

  async function handleSignOut() {
    localStorage.removeItem('@squad40:user')
    localStorage.removeItem('@squad40:token')
    setUserData({
      user: {} as UserProps,
      token: '',
    })
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('@squad40:user')
    const storedToken = localStorage.getItem('@squad40:token')

    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        api.defaults.headers.common.Authorization = `Bearer ${storedToken}`

        setUserData({
          token: storedToken,
          user: parsedUser,
        })
      } catch (error) {
        console.error('Erro ao analisar dados do usuário', error) // this needs to be improved
      }
    }
  }, [])

  return (
    <AuthContext.Provider value={{ handleSignIn, handleSignOut, userData }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
