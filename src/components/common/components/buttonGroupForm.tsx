// interface IProps {
//   onSubmit: () => void
// }

import { useRouter } from 'next/router'

interface Iprops {
  // isDisabledRegister: boolean
  isEdit?: boolean
  PageRedirectCancelButton: string
}
export const ButtonGroupForm = ({
  PageRedirectCancelButton,
  isEdit = false,
}: Iprops) => {
  const { push } = useRouter()
  return (
    <div className="flex justify-end gap-4">
      <div>
        <button
          type="submit"
          className="btn  border-none bg-custom7 hover:bg-[#3f901D] text-white capitalize"
        >
          {isEdit ? 'Actualizar' : 'Registrar'}
        </button>
      </div>
      <div>
        <button
          type="button"
          className="btn border-none hover:bg-[#BD2130]  bg-custom8 text-white capitalize"
          onClick={() => push(PageRedirectCancelButton)}
        >
          Cancelar
        </button>
      </div>
    </div>
  )
}
