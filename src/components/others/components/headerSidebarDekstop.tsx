import { SetSidebar } from '@Store/screen/ScreenSlicer'
import { FaAngleLeft } from 'react-icons/fa'
import NextImage from 'next/image'
import { AppState } from '@Store/store'
import { TittleSibebar } from '@Mock/Sidebar'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
export const HeaderSidebarDesktop = () => {
  const { push } = useRouter()
  const { Sidebar } = useSelector((state: AppState) => state.Screen)
  const disptach = useDispatch()
  return (
    <div
      className="h-16 w-full flex flex-row items-center justify-between cursor-pointer"
      onClick={() => push('/')}
    >
      <div className="flex flex-row items-center gap-2 w-full ">
        <div className="relative aspect-square h-[39px] z-50 ">
          <NextImage
            src="/img/default/LogoGoreuSM.png"
            priority
            alt="Logo_Goreu"
            fill
            className="absolute w-ful h-full"
          />
        </div>
        <h4
          className={`${
            Sidebar ? '' : 'invisible opacity-0 -translate-x-14'
          } flex items-center justify-center w-full transition-all duration-300 z-0  ease-in-out text-black font-bold`}
        >
          {TittleSibebar}
        </h4>
      </div>
    </div>
  )
}
