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
import { ChartsLinear } from 'src/components/common/components/chartslinear'
import { ChartLinear2 } from 'src/components/common/components/chartLinear2'

export default function Home() {
  const { push } = useRouter()
  const { GetValueLS } = useLocalStorage()
  const dispatch = useDispatch()
  // useEffect(() => {
  //   if (typeof GetValueLS('AccesToken') === 'string') {
  //     SetToken(GetValueLS('AccesToken')!)
  //     dispatch(SetToken(GetValueLS('AccesToken')!))
  //   } else {
  //     dispatch(SetToken(null))
  //     push('/login')
  //   }
  // }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
      <ChartsLinear />
      <ChartLinear2 />
      {/* <ChartsLinear /> */}
    </div>
  )
}
