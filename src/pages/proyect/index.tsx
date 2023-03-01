/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useLocalStorage } from '@Hooks/useLocalStorage'
import { useRouter } from 'next/router'
import { SetToken } from '@Store/auth/AuthSlice'
import { BreadCrumbs, CardTittle, Proyects } from '@Common'
import { useDispatch } from 'react-redux'
import {
  FaPlusCircle,
  FaAtom,
  FaTractor,
  FaCheckCircle,
  FaRegTimesCircle,
} from 'react-icons/fa'
export default function Index() {
  const { push } = useRouter()
  const { GetValueLS } = useLocalStorage()
  const dispatch = useDispatch()
  useEffect(() => {
    if (typeof GetValueLS('AccesToken') === 'string') {
      SetToken(GetValueLS('AccesToken')!)
      dispatch(SetToken(GetValueLS('AccesToken')!))
      // push('/')
    } else {
      dispatch(SetToken(null))
      push('/login')
    }
  }, [])
  return (
    <div className="flex flex-col gap-4">
      <BreadCrumbs
        TituloSeccion="Listar Proyectos"
        history={[{ description: 'Proyectos' }]}
      />
      <CardTittle
        BottomEvent={{
          Icon: FaPlusCircle,
          tittle: 'Crear Nuevo Proyecto',
          OnClick: () => push('/proyect/create'),
        }}
        Items={[
          { Icon: FaAtom, Tittle: 'Todos' },
          { Icon: FaTractor, Tittle: 'Ejecutandose' },
          { Icon: FaCheckCircle, Tittle: 'Terminados' },
          { Icon: FaRegTimesCircle, Tittle: 'Paralizados' },
        ]}
      />
      <Proyects />
    </div>
  )
}
