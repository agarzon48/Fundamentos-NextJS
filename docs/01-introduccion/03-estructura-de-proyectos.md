# Estructura de los proyectos de next.js

## Directorios de nivel superior

> Iremos explorando el proyecto recién creado

- `app`: Representa el enrutador
- `pages`: Se utiliza para el anterior enrutador, que no veremos en el curso pero cuyo funcionamiento es similar a `/app` y está documentado en la documentación oficial
- `public`: Almacena los archivos estáticos que queremos servir en nuestra web
- `src`: Es un directorio opcional con fines organizativos

## Archivos de nivel superior

> Iremos explorando el proyecto recién creado

- `next.config.js`: Configura nuestra aplicación
- `package.json`: Incluye dependencias, scripts e información sobre nuestro paquete
- `instrumentation.ts`: Permite configurar instrumentación y telemetría
- `middleware.ts`: Permite configurar un middleware
- `.env`, `.env.local`, `.env.production`, `.env.development`: Permiten configurar variables de entorno. El archivo seleccionado dependerá del entorno en que estemos trabajando.
- `.eslintrc.json`: Permite configurar nuestro linter
- `.gitignore`: Permite excluir archivos o directorios del control de versiones
- `next-env.d.ts`: Declara los tipos de TypeScript
- `tsconfig.json`: Permite configurar nuestro compilador de TypeScript
- `jsconfig.json`: Permite configurar JavaScript

## Convenciones

> Iremos creando las [rutas de nuestra aplicación](./assets/01-app-router.md)

Next.js es un framework. Como tal, no solo nos ofrece una serie de herramientas, sino que también nos "impone" cierta filosofía de trabajo. En este sentido, destacan sus convenciones: Dado que parte del espíritu de Next.js consiste en utilizar un sistema de enrutado "tradicional", basado en directorios, el framework utiliza una serie de convenciones que otorgará a los archivos ubicados en el router (directorios `/app` o `/pages`) cierta funcionalidad adicional.

La convención, por tanto, implica que:

1. Next.js nos fuerza a utilizar un archivo con un nombre determinado
2. Estos archivos tendrán un export (generalmente default), y la función exportada adquirirá una funcionalidad adicional que dependerá del nombre del archivo

Veamos algunos ejemplos:

### Convenciones de enrutado

- [`layout`](https://nextjs.org/docs/app/api-reference/file-conventions/layout): Nos permite definir una interfaz de usuario que se compartirá entre diferentes rutas, sin volver a recargarse cada vez que se navegue en su interior
- [`page`](https://nextjs.org/docs/app/api-reference/file-conventions/page): Representa una ruta visitable desde el navegador
- [`loading`](https://nextjs.org/docs/app/api-reference/file-conventions/loading): Similar a `<Suspense />` en React, nos permite definir una vista que se renderizará durante el tiempo de carga de la página (recordemos que las páginas SSR pueden ser componentes asíncronos)
- [`not-found`](https://nextjs.org/docs/app/api-reference/file-conventions/not-found): Determina la vista que se renderizará cuando se reciba un error 404
- [`error`](https://nextjs.org/docs/app/api-reference/file-conventions/error): En caso de que se dispare un error, se mostrará esta interfaz de fallback
- `global-error`: Es una variante del componente error, que se ubica en el directorio `/app` y sustituye al `layout.tsx` (por lo que debe incluir los elementos `<html>` y `<body>`)
- [`route`](https://nextjs.org/docs/app/api-reference/file-conventions/route): Se utiliza para definir nuestra API, ya que gestiona peticiones vía objetos `Request` y `Response`. Permiten gestionar métodos `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD` y `OPTIONS`. Para definir el método o métodos soportados por la ruta deberemos exportar una función con su nombre. Por ejemplo: `export async function GET(request: Request) {}`
- [`template`](https://nextjs.org/docs/app/api-reference/file-conventions/template): De forma similar al layout, nos permite compartir una interfaz entre rutas. Sin embargo, en el caso del template no persistirá el estado
- [`default`](https://nextjs.org/docs/app/api-reference/file-conventions/default): Se utiliza junto a la técnica de rutas paralelas, indicando el contenido por defecto de una vista cuando la URL no hace match con alguna de las rutas definidas. Al ser un concepto avanzado, se tratará en el curso `Profundizando en Next.js`

Todos estos archivos pueden tener las terminaciones `.js`, `.jsx`, `.ts` o `.tsx`. La única excepción son los archivos `route.js` o `route.ts`, que no pueden tener una terminación propia de jsx dado que no van a devolver componentes, sino que definen la API de nuestra aplicación.

Los archivos que no sigan la convención no se tomarán en cuenta por el enrutador. Por ejemplo, si tengo el siguiente árbol de archivos:

```
/contact
  page.tsx
  super-secret.ts
```

Al navegar a `mydomain.com/contact` veré la página de contacto, pero no podré acceder al archivo `super-secret.ts` aunque escriba su nombre en el navegador.

### Tipos especiales de rutas

Next.js nos permite utilizar tipos especiales de rutas:

#### Rutas anidadas

Podemos utilizar directorios y convenciones dentro de otros directorios para anidar rutas. Por ejemplo, podríamos tener una ruta `/dashboard/users/create` con la siguiente estructura de archivos:

```
/dashboard
  /users
    /create
      page.tsx
      layout.tsx
      ...
```

#### Rutas agrupadas

También podemos agrupar rutas por razones de organización, de forma que no afectemos al enrutador. Por ejemplo, la siguiente estructura:

```
/dashboard
  /(users)
    /create
      page.tsx
    /list
      page.tsx
```

Nos permitirá acceder a las rutas `/dashboard/create` y `/dashboard/list` (nótese que los paréntesis en "(users)" hacen que se ignore ese fragmento de la ruta)

#### Rutas dinámicas

Las utilizamos cuando pretendemos obtener información de la URL. Por ejemplo, en la siguiente estructura:

```
/dashboard
  /user
    /[id]
      page.tsx
```

Queremos que al navegar a `/dashboard/user/1` se muestre la información asociada a nuestro usuario con id 1, mientras que si navegamos a `/dashboard/user/43` querremos ver la información de nuestro usuario con id 43.

Al hacer dinámico este fragmento, podemos utilizarlo como una variable. En el ejemplo, nos serviría para lanzar una query contra nuestra base de datos y ubicar al usuario de quien queremos conocer la información por medio de su id.

#### Rutas privadas

Next.js nos permite utilizar una barra baja para indicar que un directorio no debe ser accesible para el router:

```
/dashboard
  /user
    /[id]
      page.tsx
/_components
  /NavBar
  /Button
  /...
```

En este ejemplo, estamos excluyendo el directorio `_components` de la navegación.

Es importante recordar que las rutas accesibles son aquellas que incluyen un archivo `page.tsx` o `route.tsx`, así que un directorio `/components` no sería accesible si no incluyera tales archivos, aunque no utilicemos la barra baja. Sin embargo, incluirla:

1. Puede ser útil para que otros desarrolladores sepan que ese directorio no incluye rutas
1. Excluye del router también los subdirectorios, así que aunque utilizáramos un fichero `page.tsx` o `route.tsx` en algún subdirectorio, este no sería accesible.

#### Rutas paralelas

Permiten renderizar simultánea o condicionalmente dos o más páginas en la misma ruta y con el mismo layout. Se crean mediante slots, definidos con la convención `@folder`, y luego se utilizan estos slots para insertar las diferentes páginas en el mismo layout.

Tratándose de un tema avanzado, lo dejaremos para el curso "Profundizando en Next.js". Ejemplo de uso: widgets compartidos en un panel de control.

#### Rutas interceptadas

Se trata de otro concepto avanzado, que se detallará en "Profundizando en Next.js", pero lo introducimos para ofrecer una imagen de conjunto. Una ruta interceptada nos permite seleccionar el contenido de otra ruta para renderizarlo en el lugar donde se encuentra. Esto nos permite flexibilizar el layout, ya que lo utilizaríamos no solo para los componentes anidados sino también para otros presentes en otros directorios. Para alcanzar estos directorios se utilizan las convenciones `(.)folder` (mismo nivel), `(..)folder` (nivel superior), `(..)(..)folder` (dos niveles superiores) o `(...)folder` (nivel app). Ejemplo de uso: modal.

### Convenciones de metadatos

En Next.js no utilizamos la etiqueta `<head>` para indicar los metadatos de nuestra página. Pero eso no implica que no podamos definir tales metadatos, ya que disponemos de:

- Archivos orientados a facilitar metadatos, que siguen las convenciones que expongo a continuación
- La función generateMetadata o el objeto metadata, que podemos utilizar en archivos `layout.tsx` o `page.tsx`.

#### Iconos de la aplicación

Permiten definir los iconos de la aplicación (favicon en el caso de aplicaciones web o iconos para aplicaciones móviles o PWA).

- favicon -> .ico
- icon -> .ico, .jpg, .jpeg, .png, .svg, .js, .ts, .tsx
- apple-icon -> .js, .ts, .tsx

#### Open Graph/Twitter

- opengraph-image -> .jpg, .jpeg, .png, .gif, .js, .ts, .tsx
- twitter-image -> .jpg, .jpeg, .png, .gif, .js, .ts, .tsx

#### SEO

Next está pensado para la optimización SEO, por lo que también incluye convenciones útiles para la optimización de motores de búsqueda:

- sitemap -> .xml, .js o .ts
- robots -> .txt, .js o .ts
