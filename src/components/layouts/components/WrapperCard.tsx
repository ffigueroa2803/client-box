import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  tittle?: string
}
export const WrapperCard = ({ children, tittle }: IProps) => (
  <div className="p-6 w-full text-custom1 dark:text-custom5 h-fit bg-white dark:bg-darkCustom1 rounded-2xl relative">
    <div className="absolute top-2 left-6 font-bold lg:text-lg">
      {tittle && tittle}
    </div>
    <div className={`w-full ${tittle && 'mt-6'}`}>{children}</div>
  </div>
)
