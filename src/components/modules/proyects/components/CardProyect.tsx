import { IProyect } from '@Mock/DataProyects'
import { FaUser } from 'react-icons/fa'
import { Badges, ProgressBar } from '@Common'
import { GroupIconButtons } from './GroupIconButton'
import { FormatDate } from '@Utils/etc'
import NextDynamic from 'next/dynamic'

// const ProgressBar = NextDynamic(
//   () => import('@Common').then((data) => data.ProgressBar),
//   {
//     ssr: false,
//   },
// )
const Color: Partial<{
  [key: number]: 'Ejecutandose' | 'Terminados' | 'Paralizados' | 'Sin Estado'
}> = {
  0: 'Sin Estado',
  1: 'Ejecutandose',
  2: 'Terminados',
  3: 'Paralizados',
}

export const CardProyect = (data: IProyect) => {
  return (
    <div className="border border-gray-400 dark:border-custom3 rounded flex flex-col gap-2 p-3">
      <div className="text-black text-sm font-bold dark:text-custom5  flex flex-row items-center justify-between">
        <p>{data.proyectname || ''}</p>
        <Badges Status={Color[data.status]!} />
      </div>
      <div className="text-sm text-gray-400 flex flex-row  items-center gap-1 ">
        <FaUser />
        <p>{data.id_user}</p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        Unidad Ejecutora:
        <p className="badge badge-accent">{data.unidadejecutora}</p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        Inicio:
        <p className="text-base font-bold text-purple-700 dark:text-violet-400">
          {FormatDate(data.fechainicio || '')}
        </p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        Culminación:
        <p className="text-base font-bold text-green-600">
          {FormatDate(data.fechaculminacion)}
        </p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        Culminación Actualizado:
        <p className="text-base font-bold text-red-700">
          {FormatDate(data.fechainicio)}
        </p>
      </div>
      {/* <ProgressBar width={String(data.percent)} percent={`w-[${data.percent}%]`} /> */}
      <ProgressBar width={String(data.percent)} />

      <GroupIconButtons id={String(data.id)} />
    </div>
  )
}
