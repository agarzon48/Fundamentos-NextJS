# Preparativos para el despliegue

Existen diferentes formas de desplegar una aplicación de Next.js:

- Dado que Next.js es un framework fullstack, un despliegue que mantenga todas sus características requerirá de un servidor de Node.js
- Vercel dispone de soluciones extremadamente convenientes y optimizadas, que serán las que utilizaremos en este curso dado su carácter introductorio
- También tendríamos la opción de servir nuestro proyecto utilizando una imagen de docker
- Y en el caso de que no necesitemos las prestaciones server side podríamos hacer un despliegue estático

## El compilador de Next.js

Simplemente lanzando el comando `next build`, el compilador de Next.js nos ofrecerá una versión optimizada para producción de nuestro código. Estas optimizaciones incluyen:

- Optimización de imágenes
- Middleware ejecutado en Edge runtime
- Sistema de caché y revalidación, que habilita el Incremental Static Regeneration (ISR)

## ¿Qué es Vercel?

Vercel es la empersa que agrupa al equipo de desarrolladores y crearon y mantienen Next.js. Su modelo de negocio consiste en ofrecer una serie de servicios en torno al uso de Next.js, con el objetivo de facilitar el despliegue y mantenimiento de aplicaciones bajo la premisa de simplificar la gestión de la infraestructura.

## ¿Qué debo hacer antes de desplegar?

Aunque muchas de las optimizaciones de Next.js están activas por defecto, hay algunas comprobaciones que deberíamos hacer nosotros a mano antes de subir el código a producción:

- Podemos analizar métricas de rendimiento gracias al hook `useReportWebVitals` o utilizar `Lighthouse` y otras herramientas para entender qué partes de nuestra aplicación se pueden mejorar
- A nivel de código, `@next/bundle-analyzer` nos permitirá optimizar el tamaño de nuestros paquetes y las dependencias que puedan estar empeorando nuestro rendimiento
- Deberíamos comprobar que hayamos configurado adecuadamente los metadatos de nuestra aplicación, incluyendo sitemaps y robots
- Desde la perspectiva de la seguridad, revisaremos que todos los recursos privados hayan quedado protegidos por el sistema de autorización
- Conviene que hagamos tests de accesibilidad, que podríamos automatizar (más sobre esto en el curso avanzado)
