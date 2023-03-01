import { useRouter } from 'next/router'
import { FaEye, FaTrash } from 'react-icons/fa'

interface IProps {
  id: string
}

export const GroupIconButtons = ({ id }: IProps) => {
  const { push } = useRouter()

  return (
    <div className="flex flex-row gap-2 justify-end">
      <p className="flex flex-row items-center p-2 font-semibold  bg-custom7  text-white rounded-lg cursor-pointer capitalize ">
        <FaEye onClick={() => push('/proyect/' + id)} />
      </p>
      <p className="flex flex-row items-center p-2 font-semibold  bg-custom8 text-white rounded-lg cursor-pointer capitalize ">
        <FaTrash />
      </p>
    </div>
  )
}
