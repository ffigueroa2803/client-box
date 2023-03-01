import { ChangeEvent } from 'react'

interface Iprops {
  label: string
  value: boolean
  name: string
  handleChange: (e: ChangeEvent<any>) => void
}
export const Toogle = ({ handleChange, label, value, name }: Iprops) => (
  <div className="flex flex-col gap-2  w-full">
    <label htmlFor="">{label || ''}</label>
    <input
      type="checkbox"
      className="toggle toggle-success border-none "
      name={name}
      checked={value}
      onChange={handleChange}
    />
  </div>
)
