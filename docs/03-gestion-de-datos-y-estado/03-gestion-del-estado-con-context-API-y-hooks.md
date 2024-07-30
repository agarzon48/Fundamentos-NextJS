# Gestión del estado con context API y hooks

Las personas con trafondo en React.js están acostumbradas a gestionar estados en el cliente. El estado determina qué debemos renderizar en la pantalla dadas ciertas condiciones, y solemos gestionarlo por medio de los hooks `useState` y `useContext`.

## Gestión de estado en el cliente

Gran parte del estado de nuestra aplicación, por mucho que utilicemos Next.js, va a gestionarse en la parte del cliente. Por ejemplo, solo en el cliente podemos escuchar los eventos click, hover, change o submit que nos indican cómo está utilizando nuestra app el usuario.

### useState en Next.js

Dado que Next.js funciona sobre React.js, podemos utilizar el hook `useState` o custom hooks basados en este. Lo único que debemos tener en cuenta es que los componentes que utilicen estos hooks deberán incluir la directiva `'use client'`. Recordemos que los hooks que se relacionan con el ciclo de vida del componente deben atender al momento en que se renderiza, actualiza, desmonta... y todos estos eventos ocurren en el DOM

### useContext en Next.js

`useContext` presenta las mismas particularidades que `useState` más una adicional. Es frecuente que quien se inicia en Next.js piense que en el momento en que introduce hijos dentro de un provider (que por definición es CSR) convierte a estos hijos en CSR.

Sin embargo, debemos recordar que solo los componentes importados en componentes de cliente se convierten en componentes de cliente. De modo que si nuestro provider recibe los children como props, podemos tener componentes SSR anidados dentro de un contexto.

### Librerías de gestión estado

Cuando el estado de una aplicación se hace complejo o debe modificarse con frecuencia conviene utilizar librerías de gestión de estados. También podemos utilizar `useState` o `useContext`, claro, pero nuestra lógica puede enrevesarse y tendremos que recurrir a patrones como el subscriber para evitar re-renderizados innecesarios.

Muchas librerías de gestión de estado, como [Zustand](https://zustand-demo.pmnd.rs/), incluyen apartados específicos en su documentación para indicarnos las mejores prácticas a la hora de integrarlas con una aplicación de Next.js. Sin embargo, a grandes rasgos, los retos a los que nos tendremos que enfrentar van a ser los mismos que si gestionáramos el estado mediante hooks: si depende del ciclo de vida del componente, es cliente.

### Storage

Antes de pasar a la gestión de estado en el servidor quiero mencionar las estrategias de persistencia vía APIs nativas del navegador. Por ejemplo, `localStorage`, `sessionStorage` o `indexedDB`.

Si queremos utilizar estas APIs tendremos que considerar dos factores:

1. La sincronización del estado de nuestra aplicación con la API seleccionada
1. El acceso a estas APIs, que son de navegador, solo se puede hacer desde el cliente

Enfrentándonos a estos retos podemos obtener la ventaja adicional de disponer de persistencia pese a que la página se refresque o se cierre la sesión, sin necesidad de contar con un mecanismo de persistencia en backend como una base de datos.

## Gestión de estado en el servidor

Cuando estamos en el lado del servidor, el estado deja de ser un concepto dinámico y pasamos a hablar de persistencia. Normalmente utilizamos sistemas como bases de datos para hacer el seguimiento del estado de nuestra aplicación, pero debemos conocer otras estrategias.

### DB

La base de datos es la estrategia de persistencia por antonomasia en el lado del servidor. Podemos conectarnos a cualquier base de datos, y elegir entre un sistema SQL o noSQL y el dialecto idóneo dependerá de las características del proyecto.

Node.js cuenta con diferentes ORMs que nos ayudarán a conectarnos fácilmente a una base de datos y realizarán las gestiones más comunes por nosotros, ofreciéndonos métodos de conveniencia que simplifiquen el flujo de desarrollo.

### Rutas

El peso que Next.js deposita en su sistema de enrutado nos obliga a considerar las rutas como verdaderos gestores de estado. Así, una ruta puede ofrecernos información sobre qué desea el usuario:

1. Normalmente, al diseñar una API vamos a identificar recursos específicos mediante una id u otro tipo de identificador. Podemos obtener estos identificadores mediante el uso de rutas dinámicas, con la convención `[id]`
1. Otro ejemplo del uso de rutas dinámicas para gestionar el estado de la aplicación sería el destinado a seleccionar el idioma de la misma. Por ejemplo, accediendo a `/en/contact` podría estar indicando a mi aplicación que quiero que se renderice en inglés, mientras que `/es/contact` cargaría la versión española
1. Por último, recuerda que puedes utilizar los query params para configurar tu ruta. Una API sensible a los parámetros de búsqueda puede utilizarlos para adaptar su respuesta a las condiciones solicitadas

### Headers y cookies

Otro de los recursos que podemos utilizar para determinar el estado de una aplicación son los headers y las cookies. Next.js nos permite acceder a las cabeceras y cookies con las funciones `cookies` y `headers`.

Las cookies y los headers nos pueden dar información valiosa, como el idioma seleccionado por el usuario, si está o no autenticado o el tipo de preferencias que ha seleccionado.

### jwt

`jwt` (JSON Web Token) es una técnica ampliamente utilizada para la autenticaciónn de usuarios, que nos permite encapsular información sobre la sesión en un token cifrado. Este token tiene una doble función:

1. Incluye datos del usuario, como su nombre, la ruta a su avatar, su correo electrónico o su rol
1. Al poder cifrarse, podemos contrastarlo con los secretos de nuestra aplicación para detectar cuándo ha sido manipulado e invalidarlo

En la siguiente sección utilizaremos jwt para autenticarnos mediante la librería [Auth.js (antes Next Auth)](https://authjs.dev/)
