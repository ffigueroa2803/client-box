import { ChangeEvent } from 'react'

interface Iprops {
  name?: string
  value?: string
  placeholder?: string
  onchange?: (e: ChangeEvent<any>) => void
  className?: string
}
export const TextArea = ({
  className,
  name,
  onchange,
  placeholder,
  value,
}: Iprops) => (
  <textarea
    onChange={onchange}
    className={`textarea ${className}`}
    placeholder={placeholder || ''}
    value={value || ''}
  />
)
