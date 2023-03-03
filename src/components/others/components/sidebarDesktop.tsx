import { useSelector } from 'react-redux'
import { AppState } from '@Store/store'
import { HeaderSidebarDesktop, BodySidebar } from '@Others'
import { SidebarOptions } from '@Mock/Sidebar'

export const SidebarDesktop = () => {
  const { Sidebar } = useSelector((Store: AppState) => Store.Screen)
  return (
    <div
      className={` hidden fixed md:flex  dark:bg-darkCustom1 bg-white top-0 left-0 px-6  h-screen transition-all duration-300 ease-in-out border-r-2 border-custom4 dark:border-custom3 ${
        Sidebar ? 'w-[270px]' : ' w-[85px]'
      }`}
    >
      <div className="w-full flex flex-col gap-4 ">
        <HeaderSidebarDesktop />
        <BodySidebar data={SidebarOptions} />
      </div>
    </div>
  )
}
