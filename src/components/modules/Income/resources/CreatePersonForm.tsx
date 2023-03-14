import { Input } from '@Common'
import { useFormik } from 'formik'

export const CreatePersonFrom = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      documentNumber: '',
      name: '',
    },
    onSubmit: (payload) => console.log(payload),
  })
  return (
    <form className="flex flex-col gap-y-4">
      <Input
        className="flex flex-col gap-2 w-full  "
        label="Prefijo *"
        placeholder="Sr(a)"
        value={values.documentNumber}
        maxLength={8}
        name="prefije"
        handleChange={handleChange}
      />
      <Input
        className="flex flex-col gap-2 w-full  "
        label="Nombres *"
        placeholder="Ingrese su nombre"
        value={values.documentNumber}
        maxLength={8}
        name="name"
        handleChange={handleChange}
      />
      <Input
        className="flex flex-col gap-2 w-full  "
        label="Apellido Paterno *"
        placeholder="Ingrese su apellido paterno"
        value={values.documentNumber}
        maxLength={8}
        name="apepat"
        handleChange={handleChange}
      />
      <Input
        className="flex flex-col gap-2 w-full  "
        label="Apellido Materno *"
        placeholder="Ingrese su apellido materno"
        value={values.documentNumber}
        maxLength={8}
        name="apemat"
        handleChange={handleChange}
      />
      <Input
        className="flex flex-col gap-2 w-full  "
        label="Tipo Documento *"
        placeholder="Ingrese su nombre"
        value={values.documentNumber}
        maxLength={8}
        name="typeDocument"
        handleChange={handleChange}
      />
      <Input
        className="flex flex-col gap-2 w-full  "
        label="N° Documento *"
        placeholder="Ingrese su n° de documento"
        value={values.documentNumber}
        maxLength={8}
        name="documentNumber"
        handleChange={handleChange}
      />
      <Input
        className="flex flex-col gap-2 w-full  "
        label="Lugar de Nacimiento *"
        placeholder="Ingrese su lugar de nacimiento"
        value={values.documentNumber}
        maxLength={8}
        name="documentNumber"
        handleChange={handleChange}
      />

      <Input
        className="flex flex-col gap-2 w-full  "
        label="Fecha de nacimiento *"
        placeholder="Ingrese su fecha de nacimiento"
        value={values.documentNumber}
        maxLength={8}
        name="documentNumber"
        handleChange={handleChange}
      />
      <Input
        className="flex flex-col gap-2 w-full  "
        label="Sexo *"
        placeholder="Ingrese su sexo"
        value={values.documentNumber}
        maxLength={8}
        name="documentNumber"
        handleChange={handleChange}
      />
      <Input
        className="flex flex-col gap-2 w-full  "
        label="Estado Civil *"
        placeholder="Ingrese su estado civil"
        value={values.documentNumber}
        maxLength={8}
        name="documentNumber"
        handleChange={handleChange}
      />
    </form>
  )
}
