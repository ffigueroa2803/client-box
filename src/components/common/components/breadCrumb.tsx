import { useRouter } from 'next/router'
import React, { Fragment, ReactNode } from 'react'
import { FaAngleRight, FaHome } from 'react-icons/fa'
interface IProps {
  history?: { description: string; url?: string }[]
  TituloSeccion: string
}
interface IPropsHref {
  children: ReactNode
  url?: string
  ultimo?: boolean
}

export const BreadCrumbs = ({ TituloSeccion, history }: IProps) => {
  const { push } = useRouter()
  const Href = ({ children, url, ultimo = false }: IPropsHref) => (
    <div
      onClick={() => (typeof url !== 'undefined' ? push(url) : null)}
      className={`cursor-pointer ${ultimo ? 'text-gray-400' : ''}`}
    >
      {children}
    </div>
  )
  return (
    <div className="w-full flex flex-row items-center justify-between text-custom1 dark:text-custom5 ">
      <div className="md:text-2xl font-semibold">{TituloSeccion || ''}</div>
      <div className="flex flex-row gap-4">
        <div className="text-sm font-medium  flex flex-row items-center gap-2">
          <Href url="/">
            <FaHome className="text-custom2" />
          </Href>
          {history?.map((obj, k) => (
            <Fragment key={k}>
              <FaAngleRight />
              <Href url={obj?.url || undefined}>{obj.description || ''}</Href>
            </Fragment>
          ))}
          <FaAngleRight />
          <Href ultimo>{TituloSeccion || ''}</Href>
        </div>
      </div>
    </div>
  )
}
const componete = () => <div>hola</div>
// function Sumar(a: number, b: number) {
//   return a + b
// }
const Sumar = (a: number, b: number) => a + b
//
