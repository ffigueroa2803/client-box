import { BreadCrumbs, Input } from '@Common'
import { WrapperCard } from '@Layouts'
import { useFormik } from 'formik'
import { FaSave, FaSearch, FaUserPlus } from 'react-icons/fa'

const Income = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      documentNumber: '',
      name: '',
    },
    onSubmit: (payload) => console.log(payload),
  })
  return (
    <div className="flex flex-col gap-4">
      <BreadCrumbs TituloSeccion="Ingresos" />
      <div className="flex flex-col lg:flex-row gap-4">
        <WrapperCard tittle="Datos Del Cliente">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            autoComplete="off"
          >
            <div className="flex flex-row gap-y-2 flex-wrap justify-between items-end">
              <Input
                classNames="flex flex-col gap-2 w-full md:w-2/3  "
                label="Buscar Numero Recibo"
                placeholder="Numero recibo"
                value={values.documentNumber}
                maxLength={8}
                name="documentNumber"
                handleChange={handleChange}
              />
              <div className="w-full flex flex-row justify-end gap-4  items-center md:w-1/3 ">
                <button type="submit" className="btn btn-primary  flex gap-1 ">
                  <FaSearch />
                </button>
                <button className="btn btn-success">
                  <FaUserPlus />
                </button>
              </div>
            </div>
            <div className="flex flex-row gap-y-2 flex-wrap justify-between items-end">
              <Input
                label="Nombres"
                placeholder="Nombres y apellidos"
                value={values.name}
                maxLength={8}
                readonly
                name="name"
                handleChange={handleChange}
              />
            </div>
          </form>
        </WrapperCard>
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
      </div>
      <WrapperCard tittle="Detalle Recibo">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          autoComplete="off"
        >
          <div className="flex flex-row gap-y-2 flex-wrap justify-between items-end">
            <Input
              classNames="flex flex-col gap-2 w-full md:w-2/3  "
              label="Buscar Numero Recibo"
              placeholder="Numero recibo"
              value={values.documentNumber}
              maxLength={8}
              name="documentNumber"
              handleChange={handleChange}
            />
            <div className="w-full flex flex-row justify-end gap-4  items-center md:w-1/3 ">
              <button type="submit" className="btn btn-primary  flex gap-1 ">
                <FaSearch />
              </button>
              <button className="btn btn-success">
                <FaUserPlus />
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-y-2 flex-wrap justify-between items-end">
            <Input
              label="Nombres"
              placeholder="Nombres y apellidos"
              value={values.name}
              maxLength={8}
              readonly
              name="name"
              handleChange={handleChange}
            />
          </div>
        </form>
      </WrapperCard>
    </div>
  )
}
export default Income
