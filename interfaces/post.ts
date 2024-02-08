export type IBlogPost = {
  id: string
  title: string
  description: string
  date: string
  tags?: string[]
  body?: any
  poster?: string 
  // author?: string
  // slug?: string
}

export enum tags {
  HTML = 'HTML',
  CSS = 'CSS',
  Javascript = 'Javascript',
  React = 'React',
  NextJS = 'NextJS',
  Firebase = 'Firebase',
  ReactNative = 'React Native',
  Nodejs = 'Nodejs',
  NestJS = 'NestJS',
  Android = 'Android',
  IOS = 'IOS',
  UI = 'UI',
  UX = 'UX',
  API = 'API',
  TheMovieDB = 'TheMovieDB',
  Csharp = 'C#',
  aspNetCore = 'ASP.NET Core',
  netCore = '.NET',
  postgreSql = 'PostgreSQL',
}
