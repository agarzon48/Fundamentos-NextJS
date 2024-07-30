# Integración de APIs y manejo de datos en tiempo real

La integración de APIs en una aplicación de Next.js no presenta complejidades adicionales a las que presentaría en un proyecto basado en otro framework.

## Integración de APIs en el cliente

En ocasiones querremos integrar APIs en el lado del cliente. Normalmente la integración de una API va a suponer realizar llamadas a un servicio, y ya hemos visto que en general preferimos delegar estas llamadas a los componentes de servidor.

Sin embargo, existen servicios (por ejemplo, Firebase) que nos ofrecen integraciones pensadas para el lado del cliente y delegan la seguridad del servicio a la configuración del proyecto. No entramos en detalle en este tipo de servicios, ya que no presentan ninguna particularidad respecto a un proyecto elaborado íntegramente en React.js.

## Integración de APIs en el servidor

Cuando queremos integrar una API directamente en el servidor podemos utilizar el fetch extendido de Next.js. A priori no debería haber ninguna diferencia respecto a otro tipo de llamadas o gestión de datos de tercero.

Lo que sí podemos destacar es que la gestión de APIs en el servidor va a ser más segura y, por lo general, más eficiente que en el cliente. Dado que el código ejecutable no es accesible no corremos el riesgo de exponer tokens o claves de API.

## Gestión de datos en tiempo real

En ocasiones vamos a querer integrarnos a una API y que los datos obtenidos se actualicen a tiempo real. Por ejemplo, si estamos creando una tienda online es posible que podamos esperar un día a que los nuevos productos estén disponibles en la tienda. Pero si estamos escribiendo una plataforma de trading lo más probable es que queramos que los datos se actualicen a tiempo real.

Para estos casos debemos recordar invalidar la caché de Next.js. Para ello podemos:

1. Incluir `cache: 'no-store'` en el fetch
1. Incluir `revalidate: 0` en el fetch
1. Utilizar el fetch después de haber accedido a los `headers` o las `cookies`, o bien en una ruta dinámica configurada mediante el route segment `const dynamic = 'force-dynamic'`, ya que en estos casos el renderizado será necesariamente dinámico
1. Utilizar el fetch en una ruta que utilice el método `POST`

## Creación de nuestra propia API

Una de las ventajas de Next.js es que nos facilita enormemente la creación de nuestra propia API. De ahí que se califique como framework _fullstack_.

> Vamos a preparar la API de nuestra aplicación

Para crear una ruta accesible vía HTTP:

1. Debemos utilizar la convención `route.ts`.
1. Dentro de este archivo trabajaremos con `Node.js`.
1. Podremos exportar funciones asíncronas con el nombre del método que queramos utilizar (`GET`, `HEAD`, `POST`, `PUT`, `DELETE`, `PATCH`, `OPTIONS`)
1. Esta función recibe como parámetros (todos opcionales):
   1. **request** - es un objeto NextRequest, que extiende el objeto `Request` nativo del navegador
   1. **context** - incluye un objeto con la clave params, dentro del cual podemos acceder a los fragmentos dinámicos de la ruta
1. Generalmente vamos a querer que nuestra función retorne un objeto NextResponse, que de nuevo es una extensión del objeto `Response` del navegador y nos permite acceder a funcionalidades como las cookies, cabeceras o redirecciones
