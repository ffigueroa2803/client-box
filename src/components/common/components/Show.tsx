import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  isDeafult?: any
  condition: boolean
}
export const Show = ({ children, condition, isDeafult }: IProps) =>
  condition ? children : isDeafult || null
