import { ReactNode } from 'react'
import { Header, SidebarDesktop, SidebarMobile } from '@Others'
import { useSelector } from 'react-redux'
import { AppState } from '@Store/store'

interface Iprops {
  children: ReactNode
}
export const LayoutAuth = ({ children }: Iprops) => {
  const { Sidebar, Dark } = useSelector((Store: AppState) => Store.Screen)
  return (
    <div>
      <Header />
      <SidebarDesktop />
      <SidebarMobile />
      <div
        className={`transition-all duration-300 ease-in-out p-4 bg-custom4 dark:bg-custom3 min-h-[92.6vh] ${
          Sidebar ? 'md:ml-[270px]' : 'md:ml-[80px]'
        }`}
      >
        {children}
      </div>
    </div>
  )
}
