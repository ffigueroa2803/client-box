import { BreadCrumbs, Input } from '@Common'
import { useToggle } from '@Hooks/usetoggle'
import { CustomerDataClient, CustomerDataProducto } from '@Modules/Income'
import dynamic from 'next/dynamic'
const RequestDetail = dynamic(
  () => import('@Modules/Income').then((res) => res.RequestDetail),
  { ssr: false },
)
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
    </div>
  )
}
export default Income
