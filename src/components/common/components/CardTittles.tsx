import { IconType } from 'react-icons'
import { WrapperCard } from '@Layouts'
interface IProps {
  Items: { Tittle: string; Icon: IconType }[]
  BottomEvent: {
    tittle: string
    Icon: IconType
    OnClick: () => void
  }
}
export const CardTittle = ({ BottomEvent, Items }: IProps) => (
  <WrapperCard>
    <div className=" flex flex-row flex-wrap justify-between">
      <div className="flex flex-row gap-4 items-center flex-wrap justify-evenly ">
        {Items?.map(({ Icon, Tittle }, k) => (
          <div key={k} className="flex flex-row items-center gap-1 cursor-pointer">
            <Icon />
            <p>{Tittle}</p>
          </div>
        ))}
      </div>
      <div className="p-2 ">
        <button
          className="btn btn-primary flex gap-1"
          onClick={BottomEvent.OnClick}
        >
          <BottomEvent.Icon />
          <p>{BottomEvent.tittle}</p>
        </button>
      </div>
    </div>
  </WrapperCard>
)
