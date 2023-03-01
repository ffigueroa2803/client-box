import { useEffect } from 'react'

interface IProps {
  width: string
}
export const ProgressBar = ({ width }: IProps) => (
  <div className="flex flex-col gap-2">
    <label htmlFor="">Avance de la obra %: </label>
    <div className="w-full relative mt-5">
      <progress
        className="progress h-1 progress-accent w-full bg-gray-200"
        value={width}
        max="100"
      />
      <div
        className={`absolute -top-6 flex justify-end `}
        style={{
          width: `${width === '0' ? '6' : width}%`,
          // position: 'absolute',
          // top: '-1.5rem',
          // display: 'flex',
          // justifyContent: 'flex-end',
        }}
      >
        <div className="p-1 bg-accent text-xs relative after:absolute after:right-0 z-10 rounded-sm text-custom4 font-bold">
          {`${width}%`}
          {Number(width) > 5 ? (
            <div className="absolute right-0 h-full w-2/5 -z-10 -translate-y-[17px]  bg-accent  skew-y-[20deg] transform" />
          ) : (
            <div className="absolute left-0 h-full w-2/5 -z-10 -translate-y-[17px]  bg-accent  -skew-y-[20deg] transform" />
          )}
        </div>
      </div>
    </div>
  </div>
)
