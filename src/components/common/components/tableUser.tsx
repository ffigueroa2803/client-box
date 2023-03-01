/* eslint-disable  */
import { ApiUser } from '@Module/user/hooks'
import { EditUserDTO } from '@Module/user/interfaces/EditUserDTO'
import { useEffect, useState } from 'react'
import DataTable, { createTheme } from 'react-data-table-component'
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { AllUser } from '@Mock/AllUser'

createTheme('solarized', {
  text: {
    primary: 'inherint',
  },
  background: {
    default: 'inherint',
  },
  divider: {
    default: 'rgba(0,0,0,.12)',
  },
})
export const TableUser = () => {
  const [Users, SetUsers] = useState<EditUserDTO[] | []>(AllUser)
  const { GetUsers } = ApiUser()
  const { push } = useRouter()
  // const GetAllUser = async () =>
  //   await GetUsers().then((res) => SetUsers(res.data))

  const Column = [
    {
      name: 'Nombres',
      selector: (row: EditUserDTO) => row.name + ' ' + row.surname,
      // compact: true,
    },
    {
      name: 'Email',
      selector: (row: EditUserDTO) => row.email,
    },
    {
      name: 'Username',
      selector: (row: EditUserDTO) => row.username,
    },
    {
      name: 'Activo',
      selector: (row: EditUserDTO) => (
        <span
          className={` badge ${
            row.active ? 'badge-success ' : 'badge-warning'
          } p-2 rounded-md `}
        >
          {row.active ? 'Activado' : 'Desactivado'}
        </span>
      ),
    },
    {
      name: 'Opciones',
      selector: (row: EditUserDTO) => (
        <div className="flex flex-row gap-2">
          <div
            className="bg-custom7 p-2 rounded text-white cursor-pointer"
            onClick={() => {
              push('/user/' + row.id)
            }}
          >
            <FaRegEdit />
          </div>
          <div className="bg-custom8 p-2 rounded text-white cursor-pointer">
            <FaTrashAlt />
          </div>
        </div>
      ),
      maxWidth: '120px',
      center: true,
    },
  ]

  // useEffect(() => {
  //   GetAllUser()
  // }, [])

  return (
    <div className="text-custom1 bg-white dark:bg-darkCustom1 dark:text-custom5 border dark:border-none rounded-2xl">
      <DataTable
        columns={Column as any}
        responsive
        data={Users}
        theme="solarized"
        className="text-custom1 dark:text-custom5"
      />
    </div>
  )
  // const Columns: TableColumn<string> = [{ name: '#ID',selector: (row:any)=> }]
  // return <DataTable co />
}
