import { useState } from 'react'

export const useToggle = (initialValue?: boolean) => {
  const [isOpen, setIsOpen] = useState(initialValue || false)
  const OpenToggle = () => setIsOpen(true)
  const CloseToggle = () => setIsOpen(false)
  const SwitchToggle = () => setIsOpen((old) => !old)
  const SetIsOpen = (payload: boolean) => setIsOpen(payload)
  return {
    isOpen,
    SetIsOpen,
    OpenToggle,
    CloseToggle,
    SwitchToggle,
  }
}
