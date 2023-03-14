import { ChangeEvent } from 'react'

interface IProps {
  type?: 'text' | 'number' | 'email' | 'password'
  label: string
  maxLength?: number
  value: string | number
  placeholder: string
  name: string
  handleChange: (e: ChangeEvent<any>) => void
  className?: string
  readonly?: boolean
}
export const Input = ({
  label,
  placeholder,
  value,
  type = 'text',
  handleChange,
  name,
  maxLength = 255,
  className = 'flex flex-col gap-2  w-full',
  readonly,
}: IProps) => {
  return (
    <div className={className}>
      <label htmlFor="">{label || ''}</label>
      <input
        type={type}
        className="input input-bordered dark:bg-custom6 bg-white read-only:bg-gray-200  read-only:cursor-not-allowed "
        placeholder={placeholder || ''}
        // onChange={handleChange}
        // disabled
        readOnly={readonly}
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
