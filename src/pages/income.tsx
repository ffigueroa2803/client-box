import { BreadCrumbs, Input } from '@Common'
import { useToggle } from '@Hooks/usetoggle'
import {
  CustomerDataClient,
  CustomerDataProducto,
  RequestDetail,
} from '@Module/Income'
import { FaSave } from 'react-icons/fa'
import { Modal, ButtonModal } from 'src/components/common/components/Modal'

const Income = () => {
  const { isOpen, CloseToggle, OpenToggle, SetIsOpen } = useToggle()
  return (
    <div className="flex flex-col gap-4">
      <BreadCrumbs TituloSeccion="Ingresos" />
      <div className="flex flex-col lg:flex-row gap-4">
        <CustomerDataClient />
        <CustomerDataProducto />
      </div>
      <RequestDetail />
      {/* <Modal
        Tittle="Primer Nodal"
        idModal="my-modal-1"
        onClick={SetIsOpen}
        isOpen={isOpen}
        ClickOutside
      >
        estamos aqui
      </Modal>
      <ButtonModal idModal="my-modal-1" onClick={OpenToggle}>
        <FaSave />
      </ButtonModal> */}
    </div>
  )
}
export default Income
