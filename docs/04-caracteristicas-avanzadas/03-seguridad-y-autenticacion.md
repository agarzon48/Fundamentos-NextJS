# Seguridad y autenticación

Si nuestra aplicación tiene secciones privadas, es importante que sepamos protegerlas. Para ello tendremos que implementar algún sistema de autenticación.

## ¿Cómo funcionan los sistemas de autenticación?

Los sistemas de autenticación se articulan sobre tres pilares:

1. Un sistema de autenticación, que determina si el usuario es quien dice ser
1. Un sistema de gestión de sesión, que se asegura de monitorizar el estado del usuario a lo largo de las diferentes peticiones que vaya haciendo
1. Un sistema de autorización, que determina qué partes de la aplicación son accesibles para qué usuarios

### Sistemas de autenticación

Existen diferentes estrategias para asegurarnos de que un usuario es quien dice ser:

1. **Basadas en credenciales**: Es el sistema más tradicional, basado en un nombre de usuario o email y una contraseña, pero cada vez menos utilizado por los problemas que presenta por ejemplo, frente a técnicas como el phishing
1. **Basadas en tokens**: En este caso se utiliza un token, facilitado vía email o SMS por ejemplo. Facilitan el sistema de login pero requieren que el usuario tenga acceso al dispositivo que va a recibir el token
1. **Basadas en passkeys o WebAuthn**: Se trata de sistemas más modernos, basados en criptografía, más seguros que los anteriores pero también más difíciles de implementar
1. **OAuth/OpenID Connect (OIDC)**: Utilizan servicios de terceros (por ejemplo, tu cuenta de Google o de GitHub) para facilitar el login y añadir una capa de identidad

Cada proyecto necesitará un sistema de autenticación u otro. En este curso utilizaremos los proveedores de [Auth.js](https://authjs.dev/) para ofrecer una experiencia realista sobre cómo implementar un sistema de autenticación.

### Sistemas de gestión de sesión

Los sistemas de gestión de la sesión hacen un seguimiento sobre si el usuario está o no autenticado a lo largo de una serie de peticiones. Existen diferentes sistemas de gestión de sesión:

1. **Cookies**: Podemos utilizar cookies para encriptar la sesión del usuario y compartirla desde el server. Estas nos permitirán almacenar cierta información del usuario y comprobar su legitimidad, pero lo cierto es que podemos exponer información delicada o abrir brechas de seguridad en nuestra aplicación si no las utilizamos con cuidado
1. **Sesiones en la base de datos**: Una alternativa a las cookies es que el cliente solo reciba una ID de sesión y la información relativa a la misma se mantenga en la DB. De esta forma evitamos filtraciones, pero necesitaremos consultar la base de datos tras cada petición o interacción, lo que puede afectar al rendimiento de nuestra aplicación
1. **jwt**: Otra alternativa a las cookies es el uso de JWT, que son tokens en formato JSON que incluyen una firma para comprobar su validez. Su interés radica en que nos permiten compartir información entre el servidor y el cliente y, a su vez, asegurarnos de la integridad de la sesión del usuario

### Sistemas de autorización

Los sistemas de autorización deben determinar si un usuario específico tiene permisos o no para acceder a un recurso. Incluimos en un recurso una página, una dirección de la API o incluso una server action.

Una vez implementado el sistema de autenticación y de gestión de sesiones, es necesario que protejamos todos los recursos que deban ser privados.
