/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useLocalStorage } from '@Hooks/useLocalStorage'
import { useRouter } from 'next/router'
import { SetToken } from '@Store/auth/AuthSlice'
import { BreadCrumbs, CardTittle, Proyects } from '@Common'
import { useDispatch } from 'react-redux'
import { FormikProvider, useFormik } from 'formik'
import { FormProyect } from '@Modules/proyects'
// import { EditProyectDTO } from '@Modules/proyects/entitys/EditProyectDTO'
import { ApiProyects } from '@Module/proyect/hooks'
import { GetServerSidePropsContext } from 'next'
import moment from 'moment'
import { MapBeforeSave, MapProyect } from '@Utils/etc'
import { toast } from 'react-toastify'
import { AllProyects, EntityProyect } from '@Mock/AllProyect'
const { GetProyect, UpdateProyect } = ApiProyects()

interface IPropsSSR {
  data: EntityProyect
}

export default function Edit({ data }: IPropsSSR) {
  const { push, query } = useRouter()
  // console.log(AllProyects.find((obj) => obj.id === 2))

  const { GetValueLS } = useLocalStorage()
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: MapProyect(AllProyects.find((obj) => obj.id === 2)!)!,
    onSubmit: async (data) => {
      const payload = MapBeforeSave(data)
      await UpdateProyect(data.id, payload)
        .then((res) => {
          toast.success('Proyecto Actualizado')
          push('/proyect')
        })
        .catch((err) => {
          console.log(err)
          toast.success('Hubo un error')
        })
    },
  })
  const { values, handleChange, handleSubmit } = formik

  useEffect(() => {
    if (typeof GetValueLS('AccesToken') === 'string') {
      SetToken(GetValueLS('AccesToken')!)
      dispatch(SetToken(GetValueLS('AccesToken')!))
    } else {
      dispatch(SetToken(null))
      push('/login')
    }
  }, [])
  return (
    <div className=" flex flex-col gap-4">
      <BreadCrumbs
        TituloSeccion="Editar Proyecto"
        history={[{ description: 'Proyectos', url: '/proyect' }]}
      />
      <FormikProvider value={formik}>
        <FormProyect
          data={AllProyects.find((obj) => obj.id === 2)!}
          handleChange={handleChange}
          onSubmit={handleSubmit}
          isEdit
        />
      </FormikProvider>
    </div>
  )
}
export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  // let data = await GetProyect(Number(query.slug!))
  //   .then(({ data }: { data: EditProyectDTO }) => data)
  //   .catch((err) => console.log(err))
  // let data = AllProyects.find((obj) => obj.id === Number(query.slug))
  return { props: {} }
}
