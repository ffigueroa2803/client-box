import { IconType } from 'react-icons/lib'
import {
  FaRegBuilding,
  FaTools,
  FaArchway,
  FaHammer,
  FaFileSignature,
  FaChartLine,
} from 'react-icons/fa'
export interface ItemSidebar {
  Tittle: string
  notification?: string
  pathname: string
  // color: string
  Icon: IconType
  SubItem: { Tittle: string; link: string }[]
}

export interface ISidebar {
  Tittle: string
  description: string
  Icon: IconType
  Items: ItemSidebar[]
}
export const SidebarOptions: ItemSidebar[] = [
  {
    Tittle: 'Proyecto',
    Icon: FaTools,
    pathname: 'proyects',
    SubItem: [
      {
        Tittle: 'Usuarios',
        link: '/users',
      },
      {
        Tittle: 'Roles',
        link: '/rols',
      },
      {
        Tittle: 'Clasificador',
        link: '/sorter',
      },
    ],
  },
  {
    Tittle: 'Movimientos',
    Icon: FaChartLine,
    pathname: 'movements',
    SubItem: [
      {
        Tittle: 'Ingresos',
        link: '/income',
      },
      {
        Tittle: 'Extorno Recibo',
        link: '/returnreceipt',
      },
      {
        Tittle: 'Duplicado Recibo',
        link: '/duplicatereceipt',
      },
      {
        Tittle: 'Validar Anulación',
        link: '/validatecancelattion',
      },
    ],
  },
  {
    Tittle: 'Reportes',
    Icon: FaRegBuilding,
    pathname: 'reports',
    SubItem: [],
  },
]

// export const SidebarItem: ISidebar[] = [
//   {
//     Tittle: "Mantenimiento",
//     Icon: FaTools,
//     description: "Mantenimiento general",
//     Items: [
//       {
//         Tittle: "Proyecto",
//         Icon: FaRegBuilding,
//         pathname: "proyect",
//         SubItem: [
//           {
//             Tittle: "Listar",
//             link: "/proyect",
//           },
//           {
//             Tittle: "Crear",
//             link: "/proyect/create",
//           },
//           // {
//           //   Tittle: "Meta Física",
//           //   link: "/proyect/metafisica",
//           // },
//           // {
//           //   Tittle: "Ficha Técnica",
//           //   link: "proyect/fichatecnica",
//           // },
//         ],
//       },
//       {
//         Tittle: "Reportes",
//         Icon: FaFileSignature,
//         pathname: "reporte",
//         SubItem: [
//           {
//             Tittle: "Listar",
//             link: "/reporte/",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     Tittle: "Permisos",
//     Icon: FaHammer,
//     description: "Administrador de roles",
//     Items: [
//       {
//         Tittle: "Usuarios",
//         Icon: FaTools,
//         pathname: "user",
//         SubItem: [
//           {
//             Tittle: "Listar",
//             link: "/user/",
//           },
//           {
//             Tittle: "Crear",
//             link: "/user/create",
//           },
//         ],
//       },
//     ],
//   },
// ];

export const TittleSibebar: string = 'SIS-GRI'
