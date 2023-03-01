import { ISidebar, ItemSidebar } from '@Mock/Sidebar'
import { AppState } from '@Store/store'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { IconType } from 'react-icons'
import { FaAngleRight, FaCircle, FaHome } from 'react-icons/fa'
import { useSelector } from 'react-redux'
interface IProps {
  data: ISidebar[]
}
interface IHeaderItem {
  Icon: IconType
  Tittle: string
  description?: string
  onClick?: () => void
}
interface ISubItem {
  data: ItemSidebar[]
}

export const BodySidebar = ({ data }: IProps) => {
  const { Sidebar } = useSelector((Store: AppState) => Store.Screen)
  const { push } = useRouter()

  const HeaderItem = ({ Icon, Tittle, description }: IHeaderItem) => (
    <div className="w-full bg-bgColor1 gap-4 rounded-lg text-custom1 dark:text-custom5 flex flex-row items-center p-2 h-[72px] overflow-hidden">
      <div className="flex items-center w-4 h-full">
        <Icon className="h-4 w-4 " />
      </div>
      <div className="w-full flex flex-col gap-2 transition-all duration-300 ease-linear whitespace-nowrap">
        <div className=" text-base lg:text-lg text-custom2 font-semibold">
          {Tittle}
        </div>

        {description && (
          <div className="text-custom3 dark:text-custom5 text-xs lg:text-sm font-normal">
            {description}
          </div>
        )}
      </div>
    </div>
  )

  const SubItem = ({ data }: ISubItem) => {
    return (
      <div className="flex flex-col gap-4 cursor-pointer  rounded-lg p-2  transition-all text-custom1 dark:text-custom5 duration-300 ease-in-out">
        {data?.map(({ Icon, SubItem, Tittle, pathname }, k) => (
          <div
            className=" flex flex-col w-full overflow-hidden transition-all gap-2 duration-300 ease-in-out  relative"
            key={k}
          >
            <input
              type="checkbox"
              className="absolute inset-0 top-0 w-full h z-40 h-7 opacity-0 peer cursor-pointer"
            />
            <div className="flex flex-row w-full overflow-hidden z-30 ">
              <div className="flex flex-row gap-2 items-center justify-between w-full">
                <div className="flex items-center w-4 h-full">
                  <Icon className="h-4 w-4 " />
                </div>
                <div className="w-full flex flex-col gap-2 transition-all duration-300 ease-linear whitespace-nowrap">
                  {Tittle}
                </div>
              </div>
            </div>
            <div
              className={`${
                Sidebar ? '' : 'opacity-0 invisible'
              } flex items-center transition-all duration-300 ease-in-out peer-checked:rotate-90 absolute right-0 top-1`}
            >
              <FaAngleRight className="w-4 h-4" />
            </div>
            {/* Sub Items */}
            <div className="flex flex-col gap-2 w-full z-0   peer-checked:max-h-full max-h-0  ease-in-out transition-all duration-300">
              {SubItem?.map((obj, j) => (
                <div
                  key={j}
                  onClick={() => push(obj.link)}
                  className="flex flex-row gap-2 w-full h-full overflow-hidden cursor-pointer"
                >
                  <div className="flex items-center w-4 h-full justify-center">
                    <FaCircle className="h-2 w-2 " />
                  </div>
                  <div className="w-full flex flex-col gap-2 transition-all duration-300 ease-linear whitespace-nowrap ">
                    {obj.Tittle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="h-full flex flex-col  gap-2 transition-all duration-300 ease-in-out">
      {data?.map((obj, k) => (
        <Fragment key={k}>
          <HeaderItem {...obj} />
          <SubItem data={obj.Items} />
        </Fragment>
      ))}
    </div>
  )
}
