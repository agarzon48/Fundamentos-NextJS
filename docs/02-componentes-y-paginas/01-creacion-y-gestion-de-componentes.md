# Creación y gestión de componentes React en Next.js

Next.js se define como un framework para React.js, por lo que esta será la librería que utilicemos a la hora de crear nuestra interfaz. Rescatando el contenido que hemos visto hasta el momento, esto implica que, salvo en los archivos `route.ts`, tenderemos a utilizar React en el resto de ficheros.

Por su parte, los archivos `route.ts` van a estar escritos en Node, lo que nos permitirá utilizar las funcionalidades propias de un servidor.

## ¿Cómo se crean los componentes de React en Next.js?

> Vamos a crear los componentes básicos de la parte pública de nuestra aplicación. Para agilizar el trabajo, utilizaremos la librería [NextUI](https://nextui.org/):
>
> - Container (gestiona anchos máximos y márgenes)
> - Navigation (gestiona navegación y login)
> - Hero (incluye una imagen, un título, una descripción y una llamada a la acción)
> - Footer (incluye un mapa de navegación, enlaces a las páginas legales e información sobre la empresa)
> - Content (incluye dos-tres columnas de texto con o sin imagen)
> - PricingTables (incluye varias columnas con título, subtítulo, precio mensual, lista de features y CTA)
> - SocialProof (incluye título y tarjetas con cifra, título y subtítulo)

Todo el código relativo a nuestras interfaces va a ser React.js normal y corriente. Es decir, podemos crear un directorio `/components` (o `/_components`, si queremos utilizar la funcionalidad de rutas privadas) donde albergaremos todos nuestros componentes. Posteriormente los importaremos en nuestras páginas (`page.tsx`) que serán las encargadas de renderizarlos. En el caso de que queramos compartir componentes entre diferentes páginas utilizaremos los ficheros `layout.tsx`.

Sin embargo, debo destacar que una de las funcionalidades estrella de Next.js es el aprovechamiento de las prestaciones del server para hacer SSR.

Los componentes de React pueden renderizarse en el cliente o en el servidor. Habitualmente, quien tiene cierto trasfondo en React está acostumbrado a utilizar componentes de cliente. Pero Next.js trata de priorizar los componentes de servidro siempre que sea posible.

### ¿Cómo funcionan los componentes de servidor?

Por defecto, los componentes de Next.js se renderizan en el servidor para aliviar la carga de trabajo del cliente y favorecer la experiencia de usuario. Este tipo de componentes tiene una serie de ventajas:

- **Fetching de datos**: Al obtener los datos en el mismo servidor se reduce el tiempo de respuesta y el número de peticiones que hace el cliente.
- **Seguridad**: Al trasladar al servidor tanto la lógica como la obtención de datos ocultamos información como endpoints, tokens y claves de API.
- **Optimización**: Al renderizar los componentes desde el servidor reducimos la cantidad de JavaScript que se debe enviar y renderizar en el cliente. Además, ofrecemos páginas que se pueden utilizar instantáneamente, sin necesidad de esperar a que se ejecute el código JavaScript, mejorando nuestras métricas de **First Contentful Paint (FCP)**.
- **Optimización para redes sociales y motores de búsqueda**: Al renderizar nuestros componentes en el servidor, las páginas que ofrecemos incluyen HTML plano, lo que facilita su consumo por motores de búsqueda y redes sociales.
- **Streaming**: Una característica avanzada de Next.js es que nos permite distribuir el trabajo de renderizado en pequeños fragmentos e ir enviándolos al cliente, permitiendo que el usuario pueda visualizar y utilizar la página incluso antes de que se haya renderizado por completo.

Como cualquier otra prestación en el mundo del desarrollo, los componentes de servidor también tienen ciertas limitaciones. La principal es que no podemos acceder a las APIs del navegador, ya que estamos trabajando en un server. Esto hace que no podamos utilizar recursos frecuentes como los eventos, el local storage y otras APIs.

#### ¿Cómo puedo crear componentes de cliente?

Para hacer que Next.js entienda que un componente debe renderizarse en el cliente, basta con que añadamos la directiva `use client` al principio del archivo.

Siempre que necesitemos un componente interactivo (un botón, un input de formulario, un tooltip...) tendremos que utilizar componentes de cliente. También en aquellos casos en que necesitemos utilizar las APIs del navegador (geolocalización, storage...).

Todos los componentes que importemos en un archivo con la directiva `'use client'` se convertirán en componentes de cliente (CSR). Esta naturaleza se expande a todos los hijos de nuestros componentes de cliente.

#### ¿Puedo volver del CSR al SSR?

Una duda frecuente al introducirse en Next.js es cómo renderizar componentes de servidor dentro de componentes de cliente. Aunque es una técnica avanzada que se detallará en el curso "Profundizando en Next.js", las reglas básicas son las siguientes:

1. Si importas un componente de servidor en un componente de cliente (es decir, él o alguno de sus padres utiliza la directiva `use client`) se convertirá en un componente de cliente.
1. Sin embargo, seguirá siendo de servidor si lo pasas como prop (veremos un ejemplo en el tema relativo a los contextos)
1. Además, actualmente Next.js soporta las **server actions**, que son funciones que podemos invocar desde un componente de cliente pero se ejecutarán en servidor.

#### ¿Cómo se renderizan los componentes SSR y CSR?

Por defecto, Next.js utiliza componentes SSR. El proceso de renderizado el siguiente:

1. Se renderizan los componentes de servidor (para ello se utiliza el formato React Server Component Payload o **RSC payload**)
1. A continuación, Next.js utiliza el RSC payload para renderizar HTML en el servidor. El cliente recibirá este archivo HTML (junto a los assets y el CSS necesario) y se incluirá el JS necesario para renderizar los componentes de cliente.
1. En el cliente se mostrará una previsualización rápida basada en la versión HTML renderizada en el servidor.
1. El RSC Payload actualizará el DOM para que las versiones servidor y cliente coincidan. Una vez coordinadas ambas versiones se **hidratará** la página, proceso mediante el cual la app se vuelve interactiva.

## Estrategias de renderizado en Next.js
