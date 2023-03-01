/* eslint-disable react-hooks/exhaustive-deps */
import { WrapperCard } from '@Layouts'
import { DataProyects, IProyect } from '@Mock/DataProyects'
import { CardProyect } from '@Modules/proyects'
import { useEffect, useState } from 'react'
import { Show } from '@Common'
import { AllProyects } from '@Mock/AllProyect'
import { ApiProyects } from '@Module/proyect/hooks'
import { AuthRequest } from '@Module/auth/auth.request'
import { BaseConfigRequest } from '@Api/baseConfig'

export const Proyects = () => {
  const [dataProyect, setDataProuects] = useState<IProyect[]>(AllProyects)
  const [loading, setLoading] = useState(false)
  // const { GetProyects } = ApiProyects()
  // const GetAllProyect = async () => {
  //   setLoading(true)
  //   await GetProyects().then((res) => setDataProuects(res.data))
  //   setLoading(false)
  // }
  // useEffect(() => {
  //   GetAllProyect()
  // }, [])

  return (
    <WrapperCard>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <Show condition={!loading} isDeafult={<div>Skeletor</div>}>
          {dataProyect?.map((obj, k) => (
            <CardProyect {...obj} key={k} />
          ))}
        </Show>
      </div>
    </WrapperCard>
  )
}
