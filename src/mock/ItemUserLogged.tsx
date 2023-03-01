import { useEffect } from 'react'
import { IconType } from 'react-icons/lib'
import { FaUserTie, FaCaretRight } from 'react-icons/fa'
import { useLocalStorage } from '@Hooks/useLocalStorage'

export interface IItemUserLogged {
  descripction: string
  icon: IconType
  url?: string
  onClick?: () => void
}
export const ItemUserLogge: IItemUserLogged[] = [
  { descripction: 'Mi Cuenta', icon: FaUserTie, url: 'account' },
]
