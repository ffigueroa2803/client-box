interface Iprops {
  Status: 'Ejecutandose' | 'Terminados' | 'Paralizados' | 'Sin Estado'
}
const Color: { [key: string]: string } = {
  SinEstado: 'bg-gray-300',
  Ejecutandose: 'bg-purple-700',
  Terminados: 'bg-green-700',
  Paralizados: 'bg-red-700',
}
export const Badges = ({ Status }: Iprops) => (
  <div
    className={`${Color[Status]} text-white badge border-none text-xs font-bold`}
  >
    {Status}
  </div>
)
