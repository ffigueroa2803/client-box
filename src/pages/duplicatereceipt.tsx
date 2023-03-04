import { BreadCrumbs, Input } from '@Common'
import { WrapperCard } from '@Layouts'

const DuplicateReceipt = () => {
  return (
    <div className="flex flex-col gap-4">
      <BreadCrumbs
        TituloSeccion="Duplicado Recibo"
        // history={[{ description: 'Proyectos' }]}
      />
      <WrapperCard>
        <div className="flex flex-row gap-y-2 flex-wrap justify-between items-end">
          {/* <div className="w-1/2"> */}
          <Input
            classNames="flex flex-col gap-2 w-full md:w-1/2  "
            label="Buscar Numero Recibo"
            placeholder="Numero recibo"
            value={''}
            maxLength={7}
            name="cui"
            handleChange={() => console.log('')}
          />
          {/* </div> */}
          {/* <div className="flex justify-center w-1/2"> */}
          <div className="w-full flex justify-end md:w-1/2 ">
            <button
              className="btn btn-primary w-60 flex gap-1 "
              //   onClick={BottomEvent.OnClick}
            >
              {/* <BottomEvent.Icon /> */}

              <p>Buscar</p>
            </button>
          </div>

          {/* </div> */}
        </div>
      </WrapperCard>
    </div>
  )
}
export default DuplicateReceipt
