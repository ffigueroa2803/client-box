import { SetSidebar } from '@Store/screen/ScreenSlicer'
import { FaAngleLeft } from 'react-icons/fa'
import NextImage from 'next/image'
import { AppState } from '@Store/store'
import { useSelector, useDispatch } from 'react-redux'
export const HeaderSidebarMobile = () => {
  const { Sidebar } = useSelector((state: AppState) => state.Screen)
  const disptach = useDispatch()

  return (
    <div className="h-16 w-full flex flex-row items-center justify-between ">
      <div className="flex flex-row items-center gap-2">
        <div className="relative aspect-square w-[40px]">
          <NextImage
            src="/img/default/LogoGoreuSM.png"
            priority
            alt="Logo_Goreu"
            fill
            className="absolute w-ful h-full"
          />
        </div>
        <h4 className="text-black font-bold">TEXT LOGO</h4>
      </div>
      <div
        className=" h-full flex items-center cursor-pointer"
        onClick={() => disptach(SetSidebar(!Sidebar))}
      >
        <FaAngleLeft className="h-6 w-6" />
      </div>
    </div>
  )
}
