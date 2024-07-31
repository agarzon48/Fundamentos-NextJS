# Optimización y lazy loading

Next.js incluye determinadas optimizaciones que podemos aprovechar a la hora de crear nuestros proyectos. Algunas de ellas funcionan automáticamente, mientras que otras requerirán de cierta configuración o el uso de determinadas funciones o elementos.

## Imágenes

Las imágenes representan el peso principal de muchas aplicaciones web, por lo que Next.js ha extendido el elemento nativo `<img>` con su componente `<Image />`. Esta extensión agrega las siguientes ventajas:

- **Optimización del tamaño**. El componente Image se optimiza automáticamente para cada dispositivo. Además, permite el reescalado a demanda
- **Estabilidad visual**. Al disponer de las dimensiones inicialmente, evita el _layout shift_ mientras el contenido se carga
- **Velocidad de carga incrementada**. Image solo se carga al entrar al área visible del viewport, disponiendo de blur-up placeholders opcionales

El componente Image requiere de una prop src y una prop alt, que cumplen las mismas funciones que en un elemento img. Además, cuando la imagen sea remota necesitará las props width y height, y podremos incluir una prop blurDataURL.

Por último, el archivo `next.config.js` debería incluir las URL a las que vamos a dar soporte como fuentes de nuestras imágenes para facilitar su optimización.

## Vídeos

Al contrario de lo que ocurre con las imágenes, Next.js no nos ofrece un componente optimizado para vídeos. Por tanto, a la hora de introducir vídeos en nuestras aplicaciones deberíamos acogernos a las buenas prácticas habituales:

- Ofrecer contenido alternativo por si el navegador no soporta la reproducción del vídeo
- Utilizar el elemento `<track>` para añadir archivos de subtítulos
- Utilizar controles accesibles

A la hora de incrustar vídeos en nuestras aplicaciones podemos utilizar archivos que tengamos hospedados nosotros mismos o recurrir a servicios de hosting. La primera opción consume recursos de almacenamiento, pero nos da mejor control sobre el recurso, mientras que la segunda opción tiende a ser más fácil de utilizar pero suele integrarse mediante un `iframe` cuyos controles pueden ser más limitados.

En el caso de querer utilizar una fuente externa, un buen patrón es el siguiente:

1. Utiliza un componente SSR para obtener y renderizar el iframe
1. Incrusta el iframe dentro de un componente `<Suspense />`, de modo que tus usuarios puedan interactuar con la aplicación antes de que este se haya cargado por completo

## Fuentes

Para optimizar nuestras fuentes, Next.js nos ofrece la API `next/font`. Al conectarla con Google Fonts, descargará las fuentes seleccionadas durante el build time y las hospedará en local. Esto agiliza la descarga de la fuente, ya que no habrá que realizar llamadas a Google, lo que a su vez mejorará la privacidad de nuestro sitio.

## Metadatos

Los metadatos permiten optimizar nuestro sitio web para buscadores y redes sociales. Next.js ofrece dos formas de configurar nuestros metadatos:

1. Basados en configuración, utilizando un objeto `metadata` o la función `generateMetadata`
1. Basados en archivos

Ambas opciones nos permiten manipular el contenido del elemento `<head>` de nuestra página. Ten en cuenta que la función `generateMetadata` es asíncrona, por lo que podemos generar metadatos dinámicamente.

Además, debes saber que los metadatos basada en archivos tiene mayor prioridad que aquella basada en configuración.

## Scripts

Next.js nos permite importar scripts de terceros mediante la API `next/script`. Este componente garantizará que el script solo se carga una vez mientras se navega dentro del grupo de rutas anidadas en el componente en que se utilice esta API. Esto implica que si queremos cargar un script que afecte a toda nuestra aplicación deberemos hacerlo en el layout raíz.

El elemento `Script` de Next.js incluye algunas props, entre las que destacan:

- **strategy**: permite determinar en qué momento queremos ejecutar el script (beforeInteractive, afterInteractive, lazyOnload o worker -experimental-)
- **onLoad**: permite ejecutar código una vez cargado el script

## Análisis del bundle

Next.js pone a nuestra disposición el plugin `@next/bundle-analyzer`, que nos ofrecerá un reporte visual del tamaño de los módulos y dependencias de nuestra aplicación para que podamos optimizarla.

## Lazy loading

Lazy loading es una estrategia que nos permite diferir el momento en que se envía el código al cliente: en lugar de mandarle todo el código necesario para renderizar la aplicación, se irán enviando fragmentos conforme vayan siendo necesarios.

Por defecto, los componentes SSR incorporan esta estrategia. Sin embargo, implementarla en los componentes CSR requerirá:

1. El uso de imports dinámicos, para lo que podemos utilizar el módulo `next/dynamic`
1. El uso de `React.lazy()` en combinación con el componente `<Suspense />`

## Analíticas e instrumentación

Next.js pone a nuestra disposición el hook `useReportWebVitals` para poder analizar el rendimiento de nuestra web. Lo más recomendable es utilizarlo en un componente de cliente importado por el root layout.

Las métricas ofrecidas por este hook incluyen:

- **Time to First Byte** (TTFB) - Tiempo transcurrido entre que el navegador solicita la página y recibe el primer byte de información del servidor (incluye los pasos relativos al DNS, TCP y TLS)
- **First Contentful Paint** (FCP) - Momento en que el navegador renderiza el primer fragmento del DOM
- **Largest Contentful Paint** (LCP) - Momento en que el navegador ha renderizado el bloque de texto o la imagen más grande visible en el viewport
- **First Input Delay** (FID) - Tiempo que paasa entre el momento en que el usuario puede interactuar con la página y el navegador puede comenzar a gestionar eventos
- **Cumulative Layout Shift** (CLS) - Mide el tiempo que tarda el layout en estabilizar todos los elementos en el viewport
- **Interaction to Next Paint** (INP) - Mide el tiempo que tarda el navegador en reaccionar a la interacción del usuario

Además de estas métricas, Next.js nos facilita la implementación de instrumentación de monitorización mediante el archivo `instrumentation.ts`, que nos permitiría integrar servicios de OpenTelemetry o Vercel, por ejemplo. Siendo un caso avanzado, queda fuera del alcance de este curso.

## Recursos estáticos

Next.js almacena los recursos estáticos en el directorio `public`. Pero debemos tener en cuenta que Next.js es incapaz de cachear estos recursos. Además, solo se expondrán los archivos que existieran en el build time, sin que podamos agregar nuevos durante el runtime. Si queremos crear nuevos recursos deberemos utilizar sistemas de almacenamiento como Vercel Blob.

## Librerías de terceros

Aunque ahora mismo es una característica experimental, Next.js pone a nuestra disposición la librería `@next/third-parties`, que incluye una versión optimizada de algunas librerías populares de terceros. En estos momentos, la librería incluye sobre todo funcionalidades propias de Google o YouTube. Dado su carácter experimental lo dejaremos fuera del curso, pero quería menciona esta librería para que pudieras investigar más si es de tu interés.
