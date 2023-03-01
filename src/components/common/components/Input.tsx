import { ChangeEvent } from 'react'

interface IProps {
  type?: 'text' | 'number' | 'email' | 'password'
  label: string
  maxLength?: number
  value: string | number
  placeholder: string
  name: string
  handleChange: (e: ChangeEvent<any>) => void
}
export const Input = ({
  label,
  placeholder,
  value,
  type = 'text',
  handleChange,
  name,
  maxLength = 255,
}: IProps) => {
  return (
    <div className="flex flex-col gap-2  w-full">
      <label htmlFor="">{label || ''}</label>
      <input
        type={type}
        className="input input-bordered dark:bg-custom6 bg-white"
        placeholder={placeholder || ''}
        // onChange={handleChange}
        onChange={
          type === 'number'
            ? (e) =>
                (e.target.value.length <= maxLength && handleChange(e)) ||
                undefined
            : handleChange
        }
        value={value || ''}
        name={name || ''}
        maxLength={maxLength}
      />
    </div>
  )
}
