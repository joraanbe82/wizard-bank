## Introducción a Create React App ⚛️

Este proyecto fue iniciado con Create React App. [Create React App](https://github.com/facebook/create-react-app).

## Descripción del proyecto ✒️

El proyecto está configurado con el propósito de erradicar las excepciones en tiempo de ejecución.  
La comprobación estática nos ayuda a detectar una cantidad significativa de posibles errores de ejecución en tiempo de compilación.

Vamos a emplear Typescript y Eslint junto con Prettier para detectar tantos problemas como sea posible. Esto ahorra muchos problemas en la producción.

Finalmente usaremos Husky que nos dará acceso a git hooks, que son unos scripts que se ejecutan automáticamente cada vez que un evento en particula ocurre en un repositorio de Git.

Utilizaremos el pre-commit hook para ejecutar nuestro script de validación para que los desarrolladores no puedan confirmar ningún código sin pasar la validación y Lint staged se encargará de hacer todas las revisiones ejecutando los comandos npm run format:fix y npm run validate.

Otro beneficio de usar lint-staged es que hace automáticamente el git add en los archivos modificados. Así, si estamos haciendo prettier - write o eslint - fix, no tenemos que escenificar los cambios manualmente.

## Scripts disponibles ⌨️

En el directorio del proyecto, puedes ejecutar:

### `npm install` 🛠️

Ejecuta este comando para hacer la instalación de las dependencias

### `npm start` 🏁

Ejecuta la aplicación en el modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

La página se recargará si haces ediciones.\
También verás cualquier error de lint en la consola.

### `npm test` ⚗️

Ejecuta la aplicación en modo test

### `npm build` 🏗️

Construye la aplicación para producción en la carpeta `build`.\
Agrupa correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación está minificada y los nombres de los archivos incluyen los hashes.\
Tu aplicación está lista para ser desplegada.

Consulta la sección sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para más información.

## Construido con 📚

- [React](https://es.reactjs.org/) - El framework web usado
- [Typescript](https://www.typescriptlang.org/) - Super set para tipado fuerte de javascript
- [Npm](https://www.npmjs.com/) - Manejador de dependencias
- [Material-ui](https://mui.com/) - Biblioteca para el uso de componentes de UI
- [Redux](https://es.redux.js.org/) - Control de estados para acceso global en React
- [Redux Saga](https://redux-saga.js.org/) - Middleware de redux que permite controlar funciones asyncronas
- [Axios](https://github.com/axios/axios) - Cliente HTTP basado en promesas para el navegador
- [Notiflix](https://notiflix.github.io/) - Librería para notificaciones

## Autor 🧑🏻‍🚀

- **Raúl Andrade** - _Desarrollador front end_ - [randrade](https://www.linkedin.com/in/raul-andrade82/)

## Learn More

Puedes aprender más en [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, consulta [React documentation](https://reactjs.org/).
