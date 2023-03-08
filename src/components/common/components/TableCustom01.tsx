import { Show } from '@Common'

interface ColumnTable {
  TitleColumn: string
  width: string
  //   Bodu
}

interface IProps {
  Column: ColumnTable[]
  
}

export const TableCustom01 = ({}: IProps) => {
  return (
    <div className="w-full overflow-x-auto  ">
      {/* <Show condition={!LoadingGetAllGuides} isDefault={<div></div>}> */}
      <table className="table-custom min-w-[700px]">
        <thead>
          <tr>
            <th className="w-[200px]">ID Productor</th>
            <th className="min-w-[200px] w-min">Numero Remisión</th>
            <th>Peso</th>
            <th>Estado</th>
            <th className="w-[200px]">Lugar de production</th>
          </tr>
        </thead>
        <tbody className="">
          {/* {data?.map((obj: any, k: number) => (
            <tr key={k}>
              <td className="">{obj?.productorId || ''}</td>
              <td>{obj?.referralNumber}</td>
              <td>{obj?.weight}</td>
              <td>
                <Badges Estado={obj!.state || 'REGISTRADO'} />
              </td>
              <td>{obj?.productionSiteId}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
      {/* </Show> */}
    </div>
  )
}
