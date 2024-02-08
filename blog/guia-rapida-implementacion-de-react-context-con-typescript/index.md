---
    title: 'Guía Rápida: Implementación de React-Context con TypeScript'
    date: '2024-01-21'
    tags: 'React, typescript, context, hooks, useContext, Provider'
    poster: 'https://i.imgur.com/sZSylTh.jpg'
    description: 'React context es una API de React que nos permite compartir valores a través del árbol de componentes sin necesidad de pasar las props mediante componentes padres a hijos. En este artículo veremos cómo implementar React context usando React hooks, typescript y creando customs hooks.
    '
---

React context es una API de React que nos permite compartir valores a través del árbol de componentes sin necesidad de pasar las props mediante componentes padres a hijos. En este artículo veremos cómo implementar React context usando React hooks, typescript y creando customs hooks.

Según la documentación de React:

> <a href="https://react.dev/learn/passing-data-deeply-with-context#recap" target="_blank" rel="noopener"> el contexto permite que un componente proporcione información a todo el árbol que se encuentra debajo de él. </a>

## ¿ Cómo podemos implementar React.Context en nuestros proyectos ?

Si quieres tener una guía a detalle y oficial de la implementación, se recomienda visitar la página oficial de la documentación de react [aquí](https://react.dev/learn/scaling-up-with-reducer-and-context#step-1-create-the-context).

Imaginemos un escenario en el cual deseamos compartir la información del usuario logueado en toda la aplicación. En este post, nos centraremos en este caso de uso específico para proporcionar un ejemplo concreto y detallado.

Nuestro ejemplo lo implementaremos con los siguientes pasos:

1. [Crear el contexto](#crear-el-contexto)
2. [Proveer el contexto](#habilitar-el-contexto-en-el-alcance-deseado)
3. [Consumir el contexto](#consumir-contexto)

_Nota: Para seguir los ejemplos, debes tener un proyecto base de React con typescript._
_En mi caso usare [vite](https://vitejs.dev/guide/) con el template de [react-ts](https://vitejs.dev/guide/#trying-vite-online:~:text=react-,react%2Dts,-preact)_

Lo puedes crear con el siguiente comando:

```shell
 $ npm create vite@latest my-react-app -- --template react-ts
```

## Crear el contexto

Usando la función `createContext` de React creamos un contexto llamado `UserContext`. Más adelante usaremos typescript y crearemos un custom hook para su reutilización.

```js {3} showLineNumbers /createContext/
import { createContext } from 'react'

const UserContext = createContext({})

export default UserContext
```

## Habilitar el contexto en el alcance deseado.

Renderizamos nuestro contexto en el nivel deseado, todos los componentes que estén por debajo de ese contexto, podrán leer su valor. Comúnmente se renderiza en el nivel más alto de nuestra app para que esté disponible en toda la aplicación.

Para renderizar usamos el componente `Provider` que se genera al momento de crear nuestro contexto. podemos acceder a él usando `UserContext.Provider`

```js {11, 14} showLineNumbers /provider/
import UserContext from './context/user'

import UserInfo from './componentes/UserInfo'

import './App.css'

function App() {
  return (
    <>
      <div>
        <UserContext.Provider value={{ name: 'Yoyler' }}>
          <h1>Hello</h1>
          <UserInfo />
        </UserContext.Provider>
      </div>
    </>
  )
}

export default App
```

Con lo anterior, el componente `UserInfo`, podrá acceder al valor expuesto por `UserContext`

## Consumir contexto

Para obtener el valor del contexto, vamos a usar el hook `useContext` de `React` y poder mostrar el contenido.

```js {1,5} showLineNumbers
import { useContext } from 'react';
import UserContext from '../context/user';

function UserInfo() {
  const userContextValue = useContext(UserContext);

  const userName = (userContextValue as { name: string})?.name;
  return (
    <div>
      <h1>User Info</h1>
      <h2>
        Nombre de usuario: {''}
        <strong>{userName}</strong>
      </h2>
    </div>
  );
}

export default UserInfo;
```

_En este caso tuvimos que forzar el tipo de nuestro contexto para no tener errores de `typescript`, eso lo corregiremos más adelante._

Como resultado tendremos:

![resultado despues de implementar el contexto](https://i.imgur.com/4Y3mn4p.png)

Así se utiliza de forma básica React context. Sin embargo hay muchas cosas que podemos mejorar, y eso haremos.

Típicamente en grandes aplicaciones se puede llegar a tener muchos escenarios donde necesitamos implementar contextos, por eso es recomendable crear un carpeta que contenga la información necesaria para nuestros contextos.

Por cada contexto crearemos una carpeta que además de tener la información básica de nuestro contexto, también tendrá la implementación de un componente proveedor, donde estará implementada la forma de acceder y modificar los valores de nuestro contexto.

Una estructura valida seria algo asi:

![Estructura de carpeta recomendada para organizar los contextos de nuestra app](https://i.imgur.com/mydVpeg.png)

En la carpeta context, tendremos cada uno de los contextos de la aplicación, en este caso el contexto del usuario y el tema de la aplicación. En cada contexto tendremos un index y un Provider, que contendrán la definición e implementación del contexto.

También creamos la carpeta hooks donde tendremos nuestros custom hooks que más adelante implementaremos.

### Redefiniendo nuestro contexto.

En nuestro archivo `index` definiremos nuevamente nuestro contexto, pero esta vez con su tipado correspondiente. Para este caso agregaremos funciones para hacer `singIn` and `singOut` que implementaremos en nuestro `Provider`

Como resultado tendríamos algo así:

```ts {3-7,9-13, 15} showLineNumbers title="context/user/index"
import { createContext } from 'react'

export type User = {
  id: string
  name: string
  email: string
}

export type UserContextType = {
  user?: User
  singIn: (user: User) => void
  singOut: () => void
}

const UserContext = createContext<UserContextType>({} as UserContextType)

export default UserContext
```

> _Nota: El valor inicial de nuestro contexto le forzamos el tipo porque en este punto no tendremos un valor por defecto dado que en nuestro Provider expondremos siempre un valor que cumpla con el tipo definido del contexto._

### Implementación componente Provider

En nuestro `Provider` implementaremos el userContextype y consumiremos nuestro context. El provider es un componente que envolverá toda nuestra aplicación para así habilitar el contexto globalmente.

```tsx showLineNumbers title="context/user/Provider"
import React, { useState } from 'react'

import UserContext, { User } from './index'

type UserProviderProps = React.PropsWithChildren<{
  // Another props here
}>

function UserContextProvider({ children }: UserProviderProps) {
  const [currentUser, setUser] = useState<User>()

  const singIn = (user: User) => {
    setUser(user)
  }

  const singOut = () => {
    setUser(undefined)
  }
  return (
    <UserContext.Provider
      value={{
        singIn,
        singOut,
        user: currentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
```

Con esto tendremos habilitadas las las funciones para modificar nuestro contexto a gusto. Es este punto lo más importante es proveer al contexto todos los datos que se definieron en la interfaz initial `userContextType`

### Consumiendo nuestro contexto

Para consumir nuestro contexto haremos dos principales cambios.

1. En lugar de usar `UserContext.Provider` usaremos nuestro custom provider que creamos: `UserContextProvider`

2. Renderizamos nuestro contexto en el nivel más alto de nuestro árbol de componentes, en este caso el punto de montaje de nuestra `app` (main.tsx).

```tsx showLineNumbers title="main.tsx"
import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App.tsx'

import UserContextProvider from './context/user/Provider.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
)
```

y nuestro `App.tsx` quedaria algo asi:

```tsx showLineNumbers title="App.tsx"
import UserInfo from './components/UserInfo'

import './App.css'

function App() {
  return (
    <>
      <div>
        <h1>Hello</h1>
        <UserInfo />
      </div>
    </>
  )
}
export default App
```

Finalmente en nuestro componente `userInfo`, seguiremos consumiendo nuestro contexto pero esta vez estará bien tipado y tendrá acceso a todo lo expuesto.

```tsx showLineNumbers title="userInfo.tsx"
import { useContext } from 'react'
import UserContext from '../context/user'

function UserInfo() {
  const userContextValue = useContext(UserContext)

  const { user, singIn, singOut } = userContextValue

  const userName = user?.name

  return (
    <div>
      <h1>User Info</h1>
      <h2>
        Nombre de usuario: {''}
        <strong>{userName}</strong>
      </h2>
      <button
        onClick={() =>
          singIn({ id: '123', name: 'Your name', email: 'test@gmail.com' })
        }
      >
        Login user
      </button>
      <button onClick={() => singOut()}>Logout user</button>
    </div>
  )
}

export default UserInfo
```

El resultado visual serial algo asi:

Eso sería todo, ya estaríamos consumiendo satisfactoriamente nuestro contexto con `typescript`. Sin embargo, por reusabilidad y orden, la lógica para consumir el contexto es recomendable extraerla en un custom `hook`. Así cada vez que un componente requiera usar el contexto del usuario, podrá hacerlo fácilmente mediante el `hook`.

![Estructura de carpetas para nuestros custom hooks](https://i.imgur.com/qAtMAG3.png)

El `custom hook` quedaria algo asi:

```ts showLineNumbers title="hooks/useUserContext.ts"
import { useContext } from 'react'
import UserContext from '../context/user'

export default function useUserContext() {
  return useContext(UserContext)
}
```

Nuestro `UserInfo`:

```tsx {1,4,6} showLineNumbers
import useUserContext from '../hooks/useUserContext'

function UserInfo() {
  const userContextValue = useUserContext()

  const { user, singIn, singOut } = userContextValue

  const userName = user?.name

  return (
    <div>
      <h1>User Info</h1>
      <h2>
        Nombre de usuario: {''}
        <strong>{userName}</strong>
      </h2>
      <button
        onClick={() =>
          singIn({ id: '123', name: 'Your name', email: 'test@gmail.com' })
        }
      >
        Login user
      </button>
      <button onClick={() => singOut()}>Logout user</button>
    </div>
  )
}

export default UserInfo
```

### Conclusión

En conclusión, la API de contexto de `React` es una herramienta poderosa para proporcionar datos globales a tus componentes. Al implementar un patrón de proveedor, puedes encapsular de manera eficiente cómo se comparte esa información. La integración de `TypeScript` añade orden y claridad al proceso, mejorando la mantenibilidad y reduciendo errores. En conjunto, estas herramientas ofrecen una base sólida para el desarrollo eficiente de aplicaciones.

Gracias por leer!!!
