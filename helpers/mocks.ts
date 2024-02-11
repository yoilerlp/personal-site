import { tags } from '@/interfaces/post'
import { Project } from '@/interfaces/project'

const codingList: Project[] = [
  {
    title: 'EbookApp Example',
    description:
      'Este proyecto recrea la experiencia de una aplicación de libros electrónicos utilizando React Native. Es una opción cómoda para disfrutar de la lectura en dispositivos móviles.',
    year: 2021,
    tags: [tags.React, tags.ReactNative, tags.UI, tags.UX],
    category: 'Mobile',
    codeURL: 'https://github.com/yoilerlp/EbookApp-example',
    img: 'https://i.imgur.com/HLVHwDf.jpg',
  },
  {
    title: 'The MovieDB App',
    description:
      'Esta aplicación permite buscar y explorar películas utilizando el API de TheMovieDB. Proporciona detalles completos sobre el elenco, la trama y las críticas, todo desde la comodidad del dispositivo móvil.',
    year: 2021,
    tags: [
      tags.React,
      tags.ReactNative,
      tags.UI,
      tags.UX,
      tags.API,
      tags.TheMovieDB,
    ],
    category: 'Mobile',
    codeURL: 'https://github.com/yoilerlp/MovieAppTest',
    img: 'https://i.imgur.com/7Y6pKQX.jpg',
  },
  {
    title: 'Command-Book',
    description:
      'Command-Book es una API desarrollada en C# con ASP.NET Core, diseñada para almacenar los comandos más utilizados por un desarrollador. Esta API ofrece la posibilidad de categorizar los comandos por plataforma, facilitando así su acceso y organización.',
    year: 2021,
    tags: [
      tags.API,
      tags.Csharp,
      tags.aspNetCore,
      tags.netCore,
      tags.postgreSql,
    ],
    category: 'Backend',
    codeURL: 'https://github.com/yoilerlp/command-book',
    img: 'https://i.imgur.com/XttIyBC.png',
  },
  {
    title: 'ParkingLP',
    description:
      'ParkingLP es una aplicación web diseñada para gestionar parqueaderos. Permite a los usuarios afiliarse, reservar espacios de estacionamiento y cuenta con un panel de administración para la gestión de la plataforma.',
    year: 2021,
    tags: [tags.HTML, tags.CSS, tags.Javascript, tags.Firebase],
    category: 'Web',
    codeURL: 'https://github.com/yoilerlp/ParkingLp',
    demoURL: 'https://proyecto-parqueadero.web.app/',
    img: 'https://i.imgur.com/ereWHH4.jpg',
  },
]

export const mocksProjects: Project[] = [...codingList]
