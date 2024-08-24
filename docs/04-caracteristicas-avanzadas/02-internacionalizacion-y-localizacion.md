# Internacionalización y localización

> En este curso utilizaremos la propuesta de internacionalización ofrecida por la propia [Documentación oficial de Next.js](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

## Cómo se internacionaliza una aplicación

Internacionalizar una aplicación supone que sus textos (y en su caso, elementos multimedia). Centrémonos en los textos de la aplicación. Debemos resolver dos problemas:

1. ¿Dónde se almacenan los textos que queremos mostrar a nuestros usuarios?
2. ¿Cómo sabemos qué textos -o qué idioma- quiere leer cada usuario?

### ¿Dónde almacenamos los textos?

Para almacenar los textos vamos a disponer fundamentalmente de dos fuentes: cliente o servidor.

- Si vamos a enviar los textos al cliente, lo haremos en un JSON o un objeto de JavaScript. Esta estrategia es útil cuando el texto a mostrar depende de alguna interacción del usuario, ya que necesariamente tendremos que conocer el estado del cliente para poder traducir el contenido renderizado.
- Si optamos por guardar los textos en servidor, podremos utilizar de nuevo un JSON o un objeto de JavaScript. La diferencia radica en que lo gestionaremos allí y al cliente solo le enviaremos un archivo HTML, ya traducido.

Como Next.js es un framework fullstack, ambas opciones están disponibles.

### ¿Cómo elegimos qué textos renderizar?

Ya hemos visto que lo más probable es que contemos con un JSON o un objeto de JavaScript para almacenar los textos de cada idioma. Ahora la cuestión es descubrir cuál de los idiomas quiere consumir nuestro usuario. Dado que el idioma elegido depende del cliente, casi siempre identificaremos esta preferencia y la almacenaremos allí. Podemos utilizar:

- Cookies
- Storage
- Gestión de estados

Esta información es accesible desde backend por medio de las peticiones que hace el cliente. Otra vía que podemos utilizar y no requiere persistencia en el cliente ni acceso a estos elementos es la URL. Esta es la vía recomendada oficialmente por Next.js.

Por ejemplo, si accedo a /es/products se renderizará la página de productos en español, y si voy a /en/products lo hará en inglés.

Este enfoque tiene diferentes ventajas:

- No necesito acceder a cookies ni a cabeceras, por lo que puedo utilizar el renderizado estático
- No necesito utilizar sistemas de gestión en cliente
- Puedo compartir o indexar mis contenidos directamente en el idioma que haya elegido

#### ¿Cómo elijo la estrategia adecuada?

Como siempre, la estrategia adecuada depende del proyecto que estemos desarrollando. Sin embargo hay algunos elementos que nos ayudarán a elegir, y de hecho lo más probable es que convenga utilizar un enfoque híbrido:

- Enviar las traducciones al cliente supone un coste de transacción, por lo que generalmente preferiremos que el HTML llegue ya traducido.
- Sin embargo, es probable que queramos delegar toda la lógica de representación al cliente, caso en el cual podríamos cederle toda la traducción de la aplicación.
- Además, siempre que nuestro contenido pueda variar conforme a la interacción del usuario nos veremos forzados a utilizar traducciones en el cliente.
