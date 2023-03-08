import { BreadCrumbs, Input } from '@Common'
import {
  CustomerDataClient,
  CustomerDataProducto,
  RequestDetail,
} from '@Module/Income'

const Income = () => {
  return (
    <div className="flex flex-col gap-4">
      <BreadCrumbs TituloSeccion="Ingresos" />
      <div className="flex flex-col lg:flex-row gap-4">
        <CustomerDataClient />
        <CustomerDataProducto />
      </div>
      <RequestDetail />
    </div>
  )
}
export default Income
