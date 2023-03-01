/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import NextImage from 'next/image'
import { useFormik } from 'formik'
import { TextInput } from '@Common'
import { useLocalStorage } from '@Hooks/useLocalStorage'
import { useRouter } from 'next/router'
import { SetToken } from '@Store/auth/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '@Store/store'
import { AuthRequest } from '@Module/auth/auth.request'
import { AxiosResponse } from 'axios'
import { ReponseLogin } from '@Module/auth/interfaces'
import Cookies from 'js-cookie'
const authRequest = AuthRequest()
const Login = () => {
  const { token } = useSelector((Store: AppState) => Store.Auth)
  const { push } = useRouter()
  const dispatch = useDispatch()
  const { SetValueLS, GetValueLS } = useLocalStorage()
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (payload) => {
      Cookies.set('AccesToken', 'token')
      SetValueLS('AccesToken', 'token')
      push('/proyect')

      // await authRequest
      //   .Login(payload)
      //   .then(({ data }: AxiosResponse<ReponseLogin>) => {
      //     Cookies.set('AccesToken', data.token)
      //     SetValueLS('AccesToken', data.token)
      //     dispatch(SetToken(data.token))
      //     push('/')
      //   })
      //   .catch((err) => {
      //     console.log('Hubo un error')
      //     console.log(err)
      //   })
    },
  })

  useEffect(() => {
    if (typeof GetValueLS('AccessToken') === 'string') {
      SetToken(GetValueLS('AccessToken')!)
      dispatch(SetToken(GetValueLS('AccessToken')!))
      push('/')
    }
  }, [])
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* background */}
      <NextImage
        className="absolute inset-0 w-full h-full object-cover object-top -z-10"
        fill
        src={'/img/proyect/bgdefault.jpeg'}
        priority
        alt="bg_default"
      />

      {/* parte central -  logo + login */}
      <div
        className="flex flex-col gap-8 justify-center items-center z-10 w-full h-full"
        data-aos="fade-up"
      >
        <div
          className="relative w-20 h-20 rounded-md "
          // data-aos="fade-up"
        >
          <NextImage
            src="/img/proyect/logogoreu.jpg"
            alt="logo"
            className="absolute w-full h-full rounded-md"
            priority
            fill
          />
        </div>
        <h3
          className="text-white text-2xl drop-shadow-xl font-bold"
          data-aos="fade-up"
          data-aos-delay="320"
        >
          GRI - GRU
        </h3>
        <div
          className="w-[90%] max-w-[420px] bg-white rounded p-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            autoComplete="off"
          >
            <h3 className="text-center text-gray-500">
              Inicia sesión en su cuenta
            </h3>
            <TextInput
              className="p-2 rounded-lg outline-none w-full focus:border-sky-700 border-2 border-gray-200 bg-white "
              placeholder="Usuario o numero de telefono"
              name="email"
              value={values.email}
              onchange={handleChange}
            />
            <TextInput
              className="p-2 rounded-lg outline-none w-full focus:border-sky-700 border-2  border-gray-200 bg-white "
              name="password"
              type="password"
              placeholder="Contraseña"
              value={values.password}
              onchange={handleChange}
            />
            <label className="text-center text-blue-400 cursor-pointer">
              ¿Olvidaste su contraseña?
            </label>
            <button
              type="submit"
              className="text-white p-2 rounded-lg bg-sky-700 transition-colors duration-300 ease-linear hover:bg-sky-800"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
