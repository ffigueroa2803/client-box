import { BaseConfigRequest } from '@Api/baseConfig'
import { IProyect } from '@Mock/DataProyects'
import { AuthRequest } from '@Module/auth/auth.request'
import { CreateProyectDTO } from '@Module/proyect/interfaces/CreateProyectDTO'
import { EditProyectDTO } from '@Module/proyect/interfaces/EditProyectDTO'
const request = BaseConfigRequest(process.env.NEXT_PUBLIC_HOST!)

const SubDomain = 'proyect'

export const ApiProyects = () => {
  const GetProyects = async () => await request.get(SubDomain)

  const SaveProyect = async (payload: CreateProyectDTO) =>
    await request.post(SubDomain, payload)

  const GetProyect = async (id: number) =>
    await request.get(SubDomain + '/' + id)

  const UpdateProyect = async (id: number, payload: EditProyectDTO) =>
    await request.post(SubDomain + '/' + id, payload)
  return { GetProyects, SaveProyect, GetProyect, UpdateProyect }
}
