import { ChangeEvent } from 'react'

interface IProps {
  label: string
  value: string
  name: string
  handleChange: (e: ChangeEvent<any>) => void
  options: { value: string; description: string }[]
}

export const Dropdown = ({
  handleChange,
  label,
  name,
  value,
  options,
}: IProps) => (
  <div className="flex flex-col gap-2  w-full">
    <label htmlFor="">{label || ''}</label>
    <select
      className="w-full h-11 px-2 rounded-md text-black bg-white border dark:border-none drop-shadow-sm outline-none dark:bg-custom6 dark:text-custom5"
      name={name}
      value={value}
      onChange={handleChange}
    >
      <option value={'0'}>Seleccione...</option>
      {options?.map((obj, k) => (
        <option value={String(obj.value || '')} key={k}>
          {obj.description || ''}
        </option>
      ))}
    </select>
  </div>
)
