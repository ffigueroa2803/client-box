import { ChangeEvent } from 'react'

interface IProps {
  label: string
  value: string
  name: string
  valMin?: string
  valMax?: string
  handleChange: (e: ChangeEvent<any>) => void
}
export const InpuRange = ({
  handleChange,
  label,
  name,
  value,
  valMax = '100',
  valMin = '0',
}: IProps) => (
  <div className="flex flex-col gap-2  w-full">
    <label htmlFor="">{label || ''}</label>
    <div className=" flex flex-row items-center gap-2">
      <input
        type="range"
        min={valMin}
        max={valMax}
        value={value}
        name={name}
        onChange={handleChange}
        className="range range-success dark:range-primary"
      />
      <div className=" p-2 rounded-md  bg-success dark:bg-primary font-semibold text-white">{value}%</div>
    </div>
  </div>
)
