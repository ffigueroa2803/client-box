import { Input } from '@Common'
import { WrapperCard } from '@Layouts'
import { useFormik } from 'formik'
import { FaEdit, FaPrint, FaSave, FaSearch, FaUserPlus } from 'react-icons/fa'

export const RequestDetail = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      documentNumber: '',
      name: '',
    },
    onSubmit: (payload) => console.log(payload),
  })
  return (
    <WrapperCard tittle="Detalle Recibo">
      <div className="w-full overflow-x-auto  ">
        {/* <Show condition={!LoadingGetAllGuides} isDefault={<div></div>}> */}
        <table className="table-custom min-w-[700px]">
          <thead>
            <tr>
              <th className="w-[200px]">ID Producto</th>
              <th className="min-w-[200px] w-min">Producto Concepto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th className="w-[200px]">Sub Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td className="">133.22.08</td>
              <td>Constancia de estudios</td>
              <td>12.00</td>
              <td>1</td>
              <td>12.00</td>
              <td>
                <div className="flex flex-row items-center justify-between">
                  <FaEdit />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* </Show> */}
      </div>
      <div className="flex fle-row gap-2 lg:gap-10 mt-6 items-end">
        <Input
          handleChange={handleChange}
          value={values.documentNumber}
          label="Observaciones"
          name="documentNumber"
          placeholder="Ingrese las observaciones"
        />
        <button
          type="submit"
          className="btn btn-primary  flex flex-row items-center gap-4 "
        >
          <FaSave />
          <FaPrint />
          {/* <span>Guardar e Imprimir</span> */}
        </button>
      </div>
    </WrapperCard>
  )
}
