import { Input } from '@Common'
import { WrapperCard } from '@Layouts'
import { useFormik } from 'formik'
import { FaSave } from 'react-icons/fa'

export const CustomerDataProducto = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      documentNumber: '',
      name: '',
    },
    onSubmit: (payload) => console.log(payload),
  })
  return (
    <WrapperCard tittle="Datos Del Producto">
      <div className="flex flex-col gap-4">
        <Input
          label="Producto"
          placeholder="Ingrese el nombre del producto"
          value={''}
          maxLength={7}
          name="cui"
          handleChange={() => console.log('')}
        />
        <Input
          label="Precio"
          placeholder="Ingrese el nombre del producto"
          value={''}
          readonly
          maxLength={7}
          name="cui"
          handleChange={() => console.log('')}
        />
        <div className="flex flex-row gap-y-2 flex-wrap justify-between items-end">
          <Input
            classNames="flex flex-col gap-2 w-full md:w-2/3  "
            label="Cantidad"
            placeholder="Ingrese su cantidad"
            value={''}
            maxLength={8}
            name="cantidad"
            handleChange={handleChange}
          />
          <div className="w-full flex flex-row justify-end gap-4  items-center  ">
            <button
              type="submit"
              className="btn btn-primary  flex flex-row items-center gap-2 "
            >
              <FaSave />
              <span>Agregar</span>
            </button>
            {/* <button className="btn btn-success">
            <FaUserPlus />
          </button> */}
          </div>
        </div>
      </div>
    </WrapperCard>
  )
}
