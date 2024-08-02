# Fetching de datos y Server-Side Rendering

Como hemos visto, los componentes en Next.js son por defecto componentes de servidor. Además, hemos analizado las tres formas de renderizado que nos ofrece el framework:

- **Renderizado estático** (por defecto)
- **Renderizado dinámico** (para los casos en que necesitamos renderizar elementos diferentes de acuerdo a la URL o cabeceras de la petición)
- **Streaming** (también activado por defecto, permite renderizar partes de la interfaz antes de que esté toda la UI lista)

En general, vamos a preferir el SSR sobre el CSR, debido a sus ventajas en cuanto a performance y seguridad. Pero cuando queremos renderizar componentes, es posible que necesitemos poblarlos de datos previamente.

Precisamente por ello, los componentes de servidor en Next.js pueden ser asíncronos.

## Fetching de datos

Next.js es un framework de React, y como tal nos permite utilizar el fetch nativo del navegador en nuestros componentes de cliente, o bien librerías como SWR, axios o react query. Sin embargo, por regla general vamos a querer obtener los datos en el servidor, dadas las ventajas mencionadas, así que vamos a centrarnos en esta opción.

### Fetching de datos en el servidor

Next.js extiende la api fetch del navegador para incluir los comportamientos de caché y revalidación. Estos nos permiten:

- **Caché**: por defecto hasta la versión 14 y planteada como opcional desde la propuesta de la versión 15. Next guarda la respuesta en caché para no tener que volver a solicitarla, agilizando la obtención de datos y evitando la repetición de llamadas
- **Revalidación**: Next nos permite configurar cuándo purgaremos la caché y volveremos a lanzar el fetch. De este modo podemos garantizar que los datos de nuestra aplicación se actualicen con la frecuencia necesaria. Esta revalidación puede configurarse por tiempo (por ejemplo, cada hora se actualiza la información mostrada) o a demanda (por ejemplo, cada vez que se envía un formulario).
