import { BaseConfigRequest } from '@Api/baseConfig'
import { CreateUsetDTO } from '../interfaces/CreateUserDTO'

const request = BaseConfigRequest(process.env.NEXT_PUBLIC_HOST!)

const SubDomain = 'user'

export const ApiUser = () => {
  const GetUsers = async () => await request.get(SubDomain)

  const SaveUser = async (payload: CreateUsetDTO) =>
    await request.post(SubDomain, payload)

  return { GetUsers, SaveUser }
}
