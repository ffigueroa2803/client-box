/* eslint-disable */
import { useLocalStorage } from '@Hooks/useLocalStorage'
import { useRouter } from 'next/router'
import { SetToken } from '@Store/auth/AuthSlice'
import { BreadCrumbs, CardTittle } from '@Common'
import { FormUser } from '@Modules/user'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { FormikProvider, useFormik } from 'formik'
import { ApiUser } from '@Module/user/hooks'
import { toast } from 'react-toastify'
import { AllUser } from '@Mock/AllUser'
const EditarUser = () => {
  const { push } = useRouter()
  const { GetValueLS } = useLocalStorage()
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: AllUser.find((obj) => obj.id === 1!)!,
    onSubmit: async (data) => {
      console.log(data)
      //   await SaveUser(data)
      //     .then(() => {
      //       toast.success('Usuario Creado')
      //       push('/user')
      //     })
      //     .catch(() => {
      //       toast.error('Hubo un error')
      //     })
    },
  })
  const { values, handleChange, handleSubmit } = formik
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
        TituloSeccion="Editar Usuario"
        history={[{ description: 'Usuarios', url: '/user' }]}
      />
      <FormikProvider value={formik}>
        <FormUser
          data={values}
          handleChange={handleChange}
          onSubmit={handleSubmit}
          isEdit
        />
      </FormikProvider>
    </div>
  )
}
export default EditarUser
