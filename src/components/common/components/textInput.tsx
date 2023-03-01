import { ChangeEvent } from 'react'

interface Iprops {
  type?: 'email' | 'text' | 'number' | 'password'
  name?: string
  value?: string | number
  placeholder?: string
  onchange?: (e: ChangeEvent<any>) => void
  className?: string
}
export const TextInput = ({
  type = 'text',
  name,
  value,
  onchange,
  className = '',
  placeholder,
}: Iprops) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onchange}
    />
  )
}
