import { Field, FieldProps, useField, useFormikContext } from 'formik'
import { ChangeEvent, useState } from 'react'
import DateView, { registerLocale } from 'react-datepicker'
import br from 'date-fns/locale/es'
interface IProps {
  label: string
  value: Date | null
  name: string
}
export const DatePicker = ({ label, name }: IProps) => {
  registerLocale('es', br)
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div className="flex flex-col gap-2  w-full">
      <label htmlFor="">{label || ''}</label>
      <Field name={name}>
        {({ form, field }: FieldProps) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DateView
              className="text-black bg-white dark:bg-custom6 dark:text-custom5 dark:border-custom1  text-center border rounded w-full h-11 py-4 outline-none"
              name={name}
              selected={value}
              locale="es"
              dateFormat="dd/MM/yyyy"
              onChange={(val) => setFieldValue(name, val)}
            />
          )
        }}
      </Field>
    </div>
  )
}
