import { createContext, ReactNode, useEffect, useState } from "react"
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import Router from "next/router"
import { api } from "../services/apiClient"

type AuthProviderProps = {
  children: ReactNode
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>
  signOut: () => void
  isAuthenticated: boolean
}

type User = {
  email: string
  role: string
  user_id: string
}

export const AuthContext = createContext({} as AuthContextData)

let authChannel: BroadcastChannel

export function signOut() {
  destroyCookie(undefined, 'nextauth.token')
  destroyCookie(undefined, 'nextauth.refreshToken')

  authChannel.postMessage('signOut')

  Router.push('/')
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user

  useEffect(() => {
    authChannel = new BroadcastChannel('auth')

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case 'signOut':
          signOut()
          break
        default:
          break
      }
    }
  }, [])

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      api.get('/auth/me')
        .then(response => {
        const { email, role, user_id } = response.data

        setUser({
          email,
          user_id,
          role,
        })

        console.log(user)
      })
      .catch(() => {
        signOut()
      })
    }
  }, [])

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('auth/login', {
        email,
        password
      })

      const { token, user_id, role } = response.data

      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })
  
      setUser({
        email,
        user_id,
        role,
      })

      api.defaults.headers.common['x-access-token'] = `${token}`

      Router.push('/')
    } catch(err) {
      console.log(err)
    }
  }
  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}