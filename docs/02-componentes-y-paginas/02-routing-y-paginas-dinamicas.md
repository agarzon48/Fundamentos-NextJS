# Routing y páginas dinámicas

> Vamos a implementar un comportamiento dinámico en nuestras rutas `/ticket/[id]` y `/user/[id]`

Es hora de poner en práctica lo aprendido en torno a las rutas dinámicas. Necesitamos estas rutas cuando la URL va a ofrecernos información sobre lo que debemos renderizar. Por ejemplo:

- Incluye el nombre de la categoría que queremos mostrar en pantalla
- Incluye una fecha o filtros para los artículos que queremos renderizar

La ruta dinámica se crea con la convención `[name]`, donde name será el nombre de la variable a utilizar. Esta variable va a estar guardada en la clave `params` que recibe una página. Ejemplo:

```javascript
// app/users/[name]/page.tsx

export default function Page({ params }: { params: { name: string } }) {
  return <div>This user is called {params.name}</div>;
}

/*
    If we navigate to app/users/Raspas/page.tsx, this page will show the text
    'This user is called Raspas'

    If we navigate to app/users/Zari/page.tsx, this page will show the text
    'This user is called Zari'

    -- Both of them are my cats :)
*/
```
