import { Fragment, ReactNode } from 'react'
import { IconType } from 'react-icons'
interface IpropsModal {
  Tittle: string
  idModal: string
  children: ReactNode | JSX.Element
}
// idModal=my-modal-4
interface IpropsButtonModal {
  children: ReactNode | JSX.Element
  className?: string
  idModal: string
}

export const ButtonModal = ({
  children,
  className,
  idModal,
}: IpropsButtonModal) => {
  return (
    <label htmlFor={idModal} className={`btn bg- ${className}`}>
      {children}
    </label>
  )
}

export const Modal = ({ Tittle, idModal, children }: IpropsModal) => {
  return (
    <Fragment>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor={idModal} className="modal cursor-pointer">
        <label className="modal-box bg-custom5 relative" htmlFor="">
          <h3 className="text-lg font-bold">{Tittle || ''}</h3>
          <p className="py-4">{children}</p>
        </label>
      </label>
    </Fragment>
  )
}
