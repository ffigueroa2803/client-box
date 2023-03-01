import { BaseConfigRequest } from '@Api/baseConfig'
interface ILogin {
  email: string
  password: string
}
export const AuthRequest = (token?: string) => {
  const request = BaseConfigRequest(process.env.NEXT_PUBLIC_HOST!, token)

  const Login = async (payload: ILogin) =>
    await request.post('auth/login', payload)

  return { request, Login }
}
