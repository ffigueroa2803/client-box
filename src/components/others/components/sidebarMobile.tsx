import { FaAngleLeft } from 'react-icons/fa'
import NextImage from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '@Store/store'
import { HeaderSidebarMobile } from './headerSidebarMobile'
import { SidebarOptions } from '@Mock/Sidebar'
import { BodySidebar } from './bodySidebar'

export const SidebarMobile = () => {
  const { Sidebar } = useSelector((state: AppState) => state.Screen)
  const disptach = useDispatch()

  return (
    <div
      className={`md:hidden fixed h-screen top-0  dark:bg-darkCustom1 bg-white px-6 flex flex-col gap-4 text-black w-full max-w-[270px] z-20 transition-all duration-300 ease-in-out ${
        Sidebar ? 'translate-x-0' : '-translate-x-[270px]'
      } `}
    >
      <HeaderSidebarMobile />
      <BodySidebar data={SidebarOptions} />
    </div>
  )
}
