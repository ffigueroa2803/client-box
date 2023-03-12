import { Input, Modal, ButtonModal } from '@Common'
import { useToggle } from '@Hooks/usetoggle'
import { WrapperCard } from '@Layouts'
import { useFormik } from 'formik'
import { FaSearch, FaUserPlus } from 'react-icons/fa'

export const CustomerDataClient = () => {
  const { isOpen, CloseToggle, OpenToggle, SetIsOpen } = useToggle()
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      documentNumber: '',
      name: '',
    },
    onSubmit: (payload) => console.log(payload),
  })
  return (
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
            <ButtonModal idModal="my-modal-1" onClick={OpenToggle}>
              <button className="btn btn-success">
                <FaUserPlus />
              </button>
            </ButtonModal>
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
      <Modal
        Tittle="Registrar Usuario"
        idModal="my-modal-1"
        onClick={SetIsOpen}
        isOpen={isOpen}
      >
        Formulario Agregar Usuario
      </Modal>
    </WrapperCard>
  )
}
