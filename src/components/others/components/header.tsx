/* eslint-disable react-hooks/exhaustive-deps */
import { BiMenu } from 'react-icons/bi'
import { FaLanguage, FaMoon } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { IoMdNotifications } from 'react-icons/io'
import { UserLogged, ToogleDarkMode } from '@Common'
import dynamic from 'next/dynamic'
import { useCallScreen } from '@Context/screen/useCallScreen'
import { useEffect } from 'react'
import { AppState } from '@Store/store'
import { useDispatch, useSelector } from 'react-redux'
import { SetSidebar, SetDark } from '@Store/screen/ScreenSlicer'
export const Header = () => {
  const { Sidebar, Dark } = useSelector((state: AppState) => state.Screen)
  const disptach = useDispatch()

  return (
    <div
      className={` sticky top-0 h-16 dark:text-custom5 transition-all duration-300 z-40 ease-in-out dark:bg-darkCustom1 ${
        Sidebar ? 'md:ml-[270px]' : 'md:ml-[80px]'
      } flex flex-row justify-between px-4 bg-white items-center text-custom1`}
    >
      <div
        className="flex flex-row cursor-pointer"
        onClick={() => disptach(SetSidebar(!Sidebar))}
      >
        <BiMenu className="w-6 h-6" />
      </div>
      <div className="flex flex-row gap-4 items-center h-full">
        <FaLanguage className="w-4 h-4 cursor-pointer" />
        <ToogleDarkMode />
        <FiSettings className="w-4 h-4 cursor-pointer" />
        <IoMdNotifications className="w-4 h-4 cursor-pointer" />
        <UserLogged />
      </div>
    </div>
  )
}
