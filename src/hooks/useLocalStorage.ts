import { useCallback } from 'react'

export const useLocalStorage = () => {
  // useEffect(() => {}, [Window])

  const SetValueLS = (key: string, value: string) =>
    localStorage.setItem(key, JSON.stringify(value))

  const GetValueLS = (key: string) => localStorage.getItem(key) || undefined

  const RemoveValueLS = (key: string) => localStorage.removeItem(key)


  return { GetValueLS, SetValueLS, RemoveValueLS }
}
