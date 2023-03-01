/* eslint-disable react-hooks/exhaustive-deps */
import '../styles/globals.css'
import 'react-datepicker/dist/react-datepicker.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import type { AppProps } from 'next/app'
import { Fragment, useEffect } from 'react'
import { LayoutAuth } from '@Layouts'
import { AppState, AppStore, Wrapper } from '@Store/store'
import { useLocalStorage } from '@Hooks/useLocalStorage'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

//Configurando hora para usar de peru

// registerLocale('srLatn', Peru)
// import es from 'date-fns/locale/es'

function App({ Component, pageProps }: AppProps) {
  const { GetValueLS } = useLocalStorage()
  const { token } = useSelector((Store: AppState) => Store.Auth)
  const { push } = useRouter()
  const dispatch = useDispatch()
  // const [token, setToken] = useState<string | undefined>(undefined)

  useEffect(() => {
    Aos.init({
      once: true,
      offset: 10,
      duration: 1200,
    })
  }, [])

  useEffect(() => {
    if (typeof GetValueLS('AccesToken') === 'undefined') {
      push('/login')
    }
  }, [token])
  return (
    <Fragment>
      <div>
        {typeof token === 'string' ? (
          <LayoutAuth>
            <Component {...pageProps} />
          </LayoutAuth>
        ) : (
          <Component {...pageProps} />
        )}
      </div>
      <ToastContainer position="top-right" />
    </Fragment>
  )
}

export default Wrapper.withRedux(App)
