import { Input } from '@Common'
import { WrapperCard } from '@Layouts'
import { useFormik } from 'formik'
import { FaSearch, FaUserPlus } from 'react-icons/fa'

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
  )
}
