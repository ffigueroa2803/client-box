/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useLocalStorage } from '@Hooks/useLocalStorage'
import { useRouter } from 'next/router'
import { SetToken } from '@Store/auth/AuthSlice'
import { BreadCrumbs } from '@Common'
import { useDispatch } from 'react-redux'
import { FormProyect } from '@Modules/proyects'
import { useFormik, FormikProvider } from 'formik'
import { ApiProyects } from '@Module/proyect/hooks'
import moment from 'moment'
import { MapBeforeSave } from '@Utils/etc'
import { toast } from 'react-toastify'

export default function Create() {
  const { push } = useRouter()
  const { GetValueLS } = useLocalStorage()
  const dispatch = useDispatch()
  const { SaveProyect } = ApiProyects()

  const formik = useFormik({
    initialValues: {
      cui: '',
      proyectname: '',
      unidadejecutora: '',
      extension: '',
      snip: '',
      beneficiarios: '',
      fechainicio: new Date(),
      fechaculminacion: new Date(),
      fechaculminacionactualizado: new Date(),
      otros: '',
      id_user: 0,
      status: 0,
      percent: 0,
    },
    onSubmit: async (data) => {
      const payload = MapBeforeSave(data)
      await SaveProyect(payload)
        .then((res) => {
          toast.success('Proyecto Creado')
          push('/proyect')
        })
        .catch((err) => {
          console.log(err)
          toast.error('Hubo un error')
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
        TituloSeccion="Crear Proyecto"
        history={[{ description: 'Proyectos', url: '/proyect' }]}
      />
      <FormikProvider value={formik}>
        <FormProyect
          data={values}
          handleChange={handleChange}
          onSubmit={handleSubmit}
        />
      </FormikProvider>
    </div>
  )
}
