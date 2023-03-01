import { CreateProyectDTO } from '@Module/proyect/interfaces/CreateProyectDTO'
import { EditProyectDTO } from '@Module/proyect/interfaces/EditProyectDTO'
import moment from 'moment'

export const DEFAULT_USER = '/img/default/userdefault.webp'
export const LANGUAJES = {
  SPANISH: 'spanish',
  ENGLISH: 'english',
}

export const FormatDate = (data: string) => moment(data).format('DD-MM-YYYY')
export const MapProyect = (data: EditProyectDTO | EditProyectDTO) =>
  Object.assign(
    { ...data },
    {
      fechainicio: moment(data.fechainicio!).toDate(),
      fechaculminacion: moment(data.fechaculminacion!).toDate(),
      fechaculminacionactualizado: moment(
        data.fechaculminacionactualizado!,
      ).toDate(),
    },
  )

export const MapBeforeSave = (data: any) =>
  Object.assign(
    { ...data },
    {
      cui: String(data.cui),
      snip: String(data.snip),
      status: Number(data.status),
      id_user: Number(data.id_user),
      fechainicio: moment(data.fechainicio).format('YYYY-MM-DD'),
      fechaculminacion: moment(data.fechaculminacion).format('YYYY-MM-DD'),
      fechaculminacionactualizado: moment(
        data.fechaculminacionactualizado,
      ).format('YYYY-MM-DD'),
    },
  )
