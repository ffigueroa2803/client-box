import { WrapperCard } from '@Layouts'
import { CreateProyectDTO } from '../../../../module/proyect/interfaces/CreateProyectDTO'
import {
  ButtonGroupForm,
  DatePicker,
  Input,
  InpuRange,
  Dropdown,
} from '@Common'
import { ChangeEvent, FormEvent } from 'react'
interface IProps<T> {
  isEdit?: boolean
  data: T
  handleChange: (e: ChangeEvent<any>) => void
  onSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void
}

export const FormProyect = ({
  isEdit = false,
  data,
  handleChange,
  onSubmit,
}: IProps<CreateProyectDTO>) => {
  const {
    beneficiarios,
    cui,
    extension,
    fechaculminacion,
    fechaculminacionactualizado,
    fechainicio,
    id_user,
    percent,
    proyectname,
    snip,
    status,
    unidadejecutora,
  } = data

  return (
    <WrapperCard>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <Input
            type="number"
            label="Codigo de Inversión del Proyecto"
            placeholder="Codigo unico de inversion del proyeto *"
            value={cui || ''}
            maxLength={7}
            name="cui"
            handleChange={handleChange}
          />
          <Input
            label="Nombre del Proyecto"
            placeholder="Nombre del proyecto por ejecutar *"
            value={proyectname || ''}
            name="proyectname"
            handleChange={handleChange}
          />
          <Input
            label="Unidad Ejecutora"
            placeholder="Unidad ejecutora"
            value={unidadejecutora || ''}
            handleChange={handleChange}
            name="unidadejecutora"
          />
          <Input
            label="Beneficiarios"
            placeholder="Beneficiarios del proyecto"
            value={beneficiarios || ''}
            handleChange={handleChange}
            name="beneficiarios"
          />
          <div className="flex flex-col lg:flex-row gap-4">
            <Input
              label="Entensión"
              placeholder="Extensión del proyecto"
              value={extension || ''}
              handleChange={handleChange}
              name="extension"
            />
            <Input
              label="Snip"
              placeholder="Código snip del proyecto"
              value={snip || ''}
              maxLength={6}
              type="number"
              handleChange={handleChange}
              name="snip"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <DatePicker
              value={fechainicio}
              label="Fecha de Inicio"
              name="fechainicio"
            />
            <DatePicker
              value={fechaculminacion}
              label="Fecha Culminación"
              name="fechaculminacion"
            />
            <DatePicker
              value={fechaculminacionactualizado}
              label="Fecha Culminación Actualizado"
              name="fechaculminacionactualizado"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <InpuRange
              handleChange={handleChange}
              label="Avance de la Obra (%) *"
              name="percent"
              value={String(percent)}
            />
            <Dropdown
              handleChange={handleChange}
              label="Usuario a cargo"
              name="id_user"
              value={String(id_user)}
              options={[
                { description: 'Ing. Romero', value: '1' },
                { description: 'Ing. Astrid', value: '2' },
                { description: 'Arq. Caldas', value: '3' },
              ]}
            />
            <Dropdown
              handleChange={handleChange}
              label="Estado de la Obra"
              name="status"
              value={String(status)}
              options={[
                { description: 'Ejecutandose', value: '1' },
                { description: 'Terminado', value: '2' },
                { description: 'Paralizados', value: '3' },
              ]}
            />
          </div>
          <ButtonGroupForm
            PageRedirectCancelButton="/proyect"
            isEdit={isEdit}
          />
        </div>
      </form>
    </WrapperCard>
  )
}
