import { ButtonGroupForm, Input, Toogle } from '@Common'
import { WrapperCard } from '@Layouts'
import { CreateUsetDTO } from '@Module/user/interfaces/CreateUserDTO'
import { ChangeEvent, FormEvent } from 'react'

interface IProps<T> {
  isEdit?: boolean
  data: T
  handleChange: (e: ChangeEvent<any>) => void
  onSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void
}

export const FormUser = ({
  data,
  handleChange,
  onSubmit,
  isEdit,
}: IProps<CreateUsetDTO>) => {
  return (
    <WrapperCard>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <Input
            type="text"
            label="Nombres"
            placeholder="Nombre del usuario *"
            value={data.name || ''}
            // maxLength={7}
            name="name"
            handleChange={handleChange}
          />
          <Input
            label="Apellidos"
            placeholder="Apellidos del usuario *"
            value={data.surname || ''}
            name="surname"
            handleChange={handleChange}
          />
          <Input
            type="email"
            label="E-Mail"
            placeholder="E-Mail del usuario *"
            value={data.email || ''}
            handleChange={handleChange}
            name="email"
          />
          <Input
            label="Usuario"
            placeholder="Usuario unico *"
            value={data.username || ''}
            handleChange={handleChange}
            name="username"
          />
          <Input
            type="password"
            label="Contraseña"
            placeholder="Contraseña del usuario *"
            value={data.password || ''}
            handleChange={handleChange}
            name="password"
          />
          <Toogle
            label="¿Usuario Activo?"
            handleChange={handleChange}
            value={data.active}
            name="active"
          />
          <ButtonGroupForm
            PageRedirectCancelButton="/proyect"
            isEdit={isEdit}
          />
        </div>
      </form>
    </WrapperCard>
  )
}
