import NextImage from 'next/image'
import { DEFAULT_USER } from '@Utils/etc'
import { ItemUserLogge } from '@Mock/ItemUserLogged'
import { useRouter } from 'next/router'
import { useLocalStorage } from '@Hooks/useLocalStorage'
import { SetToken } from '@Store/auth/AuthSlice'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

export const UserLogged = () => {
  const dispatch = useDispatch()
  const { RemoveValueLS } = useLocalStorage()
  const { push } = useRouter()

  return (
    <div className="dropdown dropdown-hover dropdown-end cursor-pointer ">
      <div className="flex flex-row  items-center gap-2 h-full" tabIndex={0}>
        <div className="relative h-10 aspect-square rounded-lg">
          <NextImage
            src={DEFAULT_USER}
            fill
            alt="img_user_logout"
            className="absolute w-full h-full rounded-lg"
            sizes="(min-width: 200px) 100%"
          />
        </div>

        <div className="flex flex-col justify-center ">
          <div className="font-bold">Jean Flores</div>
          <div>Admin</div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-lg w-52 text-custom3"
      >
        {ItemUserLogge?.map(({ descripction, icon, onClick, url }, k) => (
          <li key={k}>
            <a
              className="text-custom2"
              onClick={typeof url !== 'undefined' ? () => push(url!) : onClick}
            >
              {descripction || ''}
            </a>
          </li>
        ))}
        <li>
          <a
            className="text-custom2"
            onClick={async () => {
              dispatch(SetToken(null))
              // Cookies.remove('AccesToken', { path: '/' })
              RemoveValueLS('AccesToken')
              push('/login')
            }}
          >
            {'Salir'}
          </a>
        </li>
      </ul>
    </div>
  )
}
