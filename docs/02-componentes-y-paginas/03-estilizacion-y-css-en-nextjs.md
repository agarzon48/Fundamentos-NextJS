# Estilización y CSS en Next.js

Next.js soporta, por defecto, diferentes formas de estilado de nuestros componentes:

1. **Global CSS**: El CSS de toda la vida, con los problemas que conlleva en una aplicación de React dado que unos estilos pueden sobreescribir a otros.
1. **CSS Modules**: Aunque la sintaxis es la misma que en el CSS tradicional, en el proceso de construcción se asignan nombres de clases únicos para evitar conflictos y facilitar el mantenimiento de la aplicación.
1. **Tailwind CSS**: Next.js da soporte por defecto a [Tailwind CSS](https://tailwindcss.com/)
1. **Sass**: También podemos utilizar preprocesadores de CSS para añadir funcionalidades a nuestros estilos.
1. **CSS en JS**: Por último, podemos utilizar sistemas como styled-components, chackra-ui y similares para gestionar nuestros estilos dinámicamente.

Este no es un curso de CSS, por lo que daremos algunos ejemplos de **Global CSS**, **CSS Modules**, **Styled Components** y **Tailwind** a modo ilustrativo. Durante el curso vamos a utilizar TailwindCSS, pero si quieres profundizar más en los otros sistemas te recomiendo consultar otros cursos sobre la materia o documentarte en Internet, ya que la cantidad de recursos disponible es muy amplia.
