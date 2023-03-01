/* eslint-disable react-hooks/exhaustive-deps */
import { useLocalStorage } from '@Hooks/useLocalStorage'
import { useRouter } from 'next/router'
import { SetToken } from '@Store/auth/AuthSlice'
import { BreadCrumbs, CardTittle, TableUser } from '@Common'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import {
  FaPlusCircle,
  FaUserShield,
  FaUserSlash,
  FaUsers,
} from 'react-icons/fa'
const Reporte = () => {
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
        TituloSeccion="Listar Reporte"
        history={[{ description: 'Reporte' }]}
      />
    </div>
  )
}

export default Reporte
