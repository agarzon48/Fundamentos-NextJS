# 1. ¿Qué es Next.js? Conceptos básicos y ventajas

Next.js es un framework de React (JavaScript) orientado a la creación de aplicciones fullstack. Al crear un proyecto de Next.js obtendremos una serie de herramientas y una configuración básica, cuyo objetivo es que nos podamos centrar en el desarrollo de nuestra aplicación.

Next.js es un framework fullstack porque combina:

- El uso de React.js para crear interfaces de usuario interactivas y escalables basadas en componentes.
- El uso de Node.js para gestionar la lógica de servidor.

Además, Next.js trae "cocinadas" algunas ventajas para agilizar y optimizar nuestra experiencia de desarrollo:

- **Optimizaciones** por defecto en imágenes, scripts y tipografías.
- **Streaming de HTML**, que nos permite una carga instantánea de nuestra interfaz.
- **SSR**, que nos permite explotar los React Server Components para reducir la cantidad de JS enviado al cliente.
- **Componentes asíncronos**, que facilitan la obtención de datos para configurar nuestros componentes.
- **Soporte de múltiples enfoques de estilos**, ya que por defecto soporta CSS, Tailwind CSS, CSS modules y otras librerías.
- **Renderizado en cliente y en servidor**, con opciones de caché e ISR (Incremental Static Regeneration).
- **Server Actions**, una prestación relativamente nueva que nos permite ahorrar llamadas a la API.
- **Gestión de rutas**, tanto para la navegación del usuario como a nivel de API. Incluye la posibilidad de anidar rutas y Layouts, un componente clave de las interfaces de Next.js.
- **Middleware**: por defecto, Next.js incluye un middleware para gestionar las peticiones al servidor, que nos facilita la integración de funcionalidades como la internacionalización o autenticación de nuestra app.
- **TypeScript**: Next.js incluye soporte personalizado para TypeScript y mejoras en su compilación.
- **Vercel**: el equipo tras Next.js tiene una suite de servicios relacionados con el despliegue y mantenimiento de aplicaciones (de pago, aunque incluye una generosa capa gratuita) destinada a simplificar enormemente los procesos de DevOps.

## ¿Qué necesitas saber para introducirte en Next.js?

### Qué es un framework

Next.js es un framework. Al contrario que una librería, los frameworks establecen cierta filosofía de trabajo o convenciones al desarrollador o desarrolladora. Esto implica que a la hora de utilizar Next.js, lo recomendable es conocer sus propuestas y convenciones. Algunas funcionalidades sólo podrán utilizarse si seguimos sus instrucciones (por ejemplo, el enrutado). Además, buscar formas de sortear estas convenciones normalmente implicará romper las reglas de Next.js: en el mejor de los casos, crearemos un código difícil de mantener y dificultaremos el soporte de la comunidad. En el peor de los casos, deshabilitaremos las optimizaciones de Next.js. De modo que si vamos a utilizar Next.js, lo mejor es que conozcamos su forma de hacer las cosas y la sigamos en la medida de lo posible.

### Versiones de Next.js

Next.js es una tecnología en constante evolución. Cada poco tiempo cambia, y para estar al día debemos hacer un esfuerzo: suscribirnos a newsletters, estar pendientes de su blog o de mentores especializados en esta herramienta... Por ejemplo, en el momento de preparar este curso conviven dos enrutadores: el app router y el pages router. En este curso nos basaremos en el app router, ya que es la propuesta más moderna de Next.js, y vamos a trabajar sobre la versión 14, que es la oficial actualmente.

Pero ten en cuenta que ya hay un Release Candidate para la versión 15, que incluye las siguientes novedades:

- Soporte para el React Compiler (v. 19).
- Las peticiones ya no se cachearán por defecto.
- Se implementará una configuración adicional para facilitar el renderizado parcial de páginas y layouts.
- Se incluirá la API next/after, que permitirá ejecutar código cuando una respuesta se haya terminado de enviar (streaming).
- Habrá nuevas opciones de configuración tanto para el router app como para el router pages.

Por tanto, todo lo que veremos durante el curso seguirá siendo válido durante la versión 15, pero si quieres especializarte en este framework será importante que trates de estar al tanto de las novedades.

### Conocimientos previos

Next.js se basa en React.js, de modo que para sacarle el máximo partido deberías tener ciertos conocimientos de

1. HTML
1. CSS
1. JS
1. React.js

Lo ideal es que también controles un poco de **Node.js**, ya que eso te permitirá exprimir la API y las Server Actions.

## Próximos pasos

- Revisión de la (Documentación Oficial)[https://nextjs.org/docs]
- Creación de un proyecto: `npx create-next-app@latest`
- Revisión de la estructura del proyecto
