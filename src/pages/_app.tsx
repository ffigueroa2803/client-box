/* eslint-disable */
import '../styles/globals.css'
import 'react-datepicker/dist/react-datepicker.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import { Fragment, useEffect } from 'react'
import { AppState, AppStore, Wrapper } from '@Store/store'
import { useLocalStorage } from '@Hooks/useLocalStorage'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Show } from '@Common'
import { useLoadTheme } from '@Hooks/useDarkMode'
import { LayoutAuth } from '@Layouts'
// const LayoutAuth = dynamic(() =>
//   import('@Layouts').then((res) => res.LayoutAuth),
// )

//Configurando hora para usar de peru

// registerLocale('srLatn', Peru)
// import es from 'date-fns/locale/es'

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  useLoadTheme()
  
  useEffect(() => {
    Aos.init({
      once: true,
      offset: 10,
      duration: 1200,
    })
  }, [])

  // useEffect(() => {
  //   if (typeof GetValueLS('AccesToken') === 'undefined') {
  //     push('/login')
  //   }
  // }, [token])
  return (
    <Fragment>
      <Show
        condition={pathname !== '/login'}
        isDeafult={<Component {...pageProps} />}
      >
        <LayoutAuth>
          <Component {...pageProps} />
        </LayoutAuth>
      </Show>
      <ToastContainer position="top-right" />
    </Fragment>
  )
}

export default Wrapper.withRedux(App)
