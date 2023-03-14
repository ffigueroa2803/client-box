import { Fragment, ReactNode } from 'react'
interface IpropsModal {
  Tittle: string
  idModal: string
  children: ReactNode | JSX.Element
  isOpen: boolean
  onClick: (payload: boolean) => void
  ClickOutside?: boolean
  className?: string
}
interface IpropsButtonModal {
  children: ReactNode | JSX.Element
  className?: string
  idModal: string
  onClick: () => void
}

export const ButtonModal = ({
  children,
  className,
  idModal,
  onClick,
}: IpropsButtonModal) => {
  return (
    <label htmlFor={idModal} className={`${className}`} onClick={onClick}>
      {children}
    </label>
  )
}

export const Modal = ({
  Tittle,
  idModal,
  children,
  onClick,
  isOpen,
  ClickOutside,
  className = 'w-11/12 max-w-5xl ',
}: IpropsModal) => {
  return (
    <Fragment>
      <input
        type="checkbox"
        className="modal-toggle"
        checked={isOpen}
        defaultChecked
        onChange={() => onClick(true)}
      />
      <div
        className="modal"
        onClick={() => (ClickOutside ? onClick(false) : undefined)}
      >
        <div
          className={`modal-box relative bg-white dark:bg-custom6 rounded-md ${className}`}
        >
          <label
            htmlFor={idModal}
            onClick={() => onClick(false)}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-custom6 dark:text-custom5 ">
            {Tittle || ''}
          </h3>
          <p className="py-4  text-custom6 dark:text-custom5 ">{children}</p>
          <div className="modal-action">
            <label
              htmlFor={idModal}
              className="btn"
              onClick={() => onClick(false)}
            >
              ok
            </label>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
