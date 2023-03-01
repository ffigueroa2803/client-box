import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}
export const WrapperCard = ({ children }: IProps) => (
  <div className="p-6 text-custom1 dark:text-custom5  bg-white dark:bg-darkCustom1 rounded-2xl">{children}</div>
)
