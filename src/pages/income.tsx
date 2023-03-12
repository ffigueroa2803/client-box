import { BreadCrumbs, Input } from '@Common'
import {
  CustomerDataClient,
  CustomerDataProducto,
  RequestDetail,
} from '@Module/Income'
import { FaSave } from 'react-icons/fa'
import { Modal, ButtonModal } from 'src/components/common/components/Modal'

const Income = () => {
  return (
    <div className="flex flex-col gap-4">
      <BreadCrumbs TituloSeccion="Ingresos" />
      <div className="flex flex-col lg:flex-row gap-4">
        <CustomerDataClient />
        <CustomerDataProducto />
      </div>
      <RequestDetail />
      <Modal Tittle="Primer Nodal" idModal="my-modal-4">
        estamos aqui
      </Modal>
      <ButtonModal idModal="my-modal-4">
        <FaSave />
      </ButtonModal>
    </div>
  )
}
export default Income
