## Introducción a Create React App ⚛️

Este proyecto fue iniciado con Create React App. [Create React App](https://github.com/facebook/create-react-app).

## Descripción del proyecto ✒️

El proyecto está configurado con el propósito de erradicar las excepciones en tiempo de ejecución.  
La comprobación estática nos ayuda a detectar una cantidad significativa de posibles errores de ejecución en tiempo de compilación.

Vamos a emplear Typescript y Eslint junto con Prettier para detectar tantos problemas como sea posible. Esto ahorra muchos problemas en la producción.

Finalmente usaremos Husky que nos dará acceso a git hooks, que son unos scripts que se ejecutan automáticamente cada vez que un evento en particula ocurre en un repositorio de Git.

Utilizaremos el pre-commit hook para ejecutar nuestro script de validación para que los desarrolladores no puedan confirmar ningún código sin pasar la validación y lint-staged se encargará de hacer todas las revisiones ejecutando los comandos npm run format:fix y npm run validate.

Otro beneficio de usar lint-staged es que hace automáticamente el git add en los archivos modificados. Así, si estamos haciendo prettier -write o eslint -fix, no tenemos que agregar los cambios manualmente.


El wizard se compone de tres etapas, información del producto, formulario y verificación.
En la primera etapa hay una explicación del producto, un checkbox que hay que aceptar para poder avanzar y dos botones, un botón de cancelar que no tiene funcionalidad, está puesto para darle más sentido al wizard como si se hubiese accedido desde otra página y si se quisiera cancelar volver a ella y el botón de
siguiente que se encuentra deshabilitado hasta que no se acepten los términos y condiciones al clicar en el checkbox.

La segunda etapa se compone de un pequeño formulario en el cual hay que introducir una contraseña, confirmarla y escribir una pista para poder recordar la contraseña en caso de olvido. Los inputs de las contraseñas cuentan con un icono para poder ver lo que se está escribiendo, el cambio entre ver o no ver la contraseña se hace a la vez en ambos inputs. Al perder el foco del input de confirmar la contraseña, se verifica que la contraseña aportada tenga entre 8 y 24 caracteres, 1 mayúscula y 1 minúscula además de comprobar que ambas contraseñas escritas sean idénticas, en el caso de error se muestra un texto informativo en color rojo indicando uno de los fallos dando prioridad siempre al mensaje de error de estilo antes que al mensaje de que sean idénticas.
En cuanto se escriba algún caracter más o se borre, los mensajes se resetan hasta que se vuelva a perder el foco del input de repetir la contraseña.
El botón de siguiente quedará deshabilitado hasta que se cumplan los requisitos y se hallan rellenado correctamente todo el formulario.

Al avanzar a la tercera etapa se hace una simulación a una llamada asíncrona, mientras que se termina la llamada y devuelve una respuesta en la pantalla aparece una pantalla de carga con un pulso hasta que se complete la carga, la librería utilizada para ello es `Notiflix`, mostrando una respuesta positiva de que la cuenta ha sido creada satisfactoriamente excepto en el caso en el que la contraseña introducida sea `pruebaKO123` en ese caso la llamada asincrona devolverá un error y el mensaje a mostrar será el de fallo.
Para terminar existe un botón para volver al inicio que reseta todos los valores que han sido guardados. La librería usada para el manejo de los estados ha sido redux, está configurada para usar con el middleware `redux-devtools-extension` para que se pueda usar la extensión de google chrome para controlar el estado de la aplicación en todo momento y el middleware `redux-saga` para controlar la asincronía de la llamada para verificar los datos. La libreríá usada para una gran parte de componentes de UI ha sido `material-ui` ya que provee de componentes ya estilizados y con diseños modernos, además tiene una documentación bastante amplia lo que hace que su utilización sea bastante sencilla. Los componentes de material-ui tienen la opción de agregar estilos en línea de forma sencilla pero en vez de ello se ha utilizado la librería de `styled-components` para cuando ha sido necesario agregar algo más de customización al algun componente.

El proyecto se estructura de la siguiente manera, dentro de la carptea `src` en la raíz está el archivo Index.tsx es la base de donde parte el proyecto, en el se incluye el provider de Redux y el store para poder acceder desde cualquier componente de React. 
- El archivo App.tsx se utilizado para importar el stepper y las vistas. 
- En la carpeta action-types se declaran en un enum todos los tipos de acciones.
- En la carpeta actions se declaran las interfaces de las acciones junto con sus payloads y se exportan en conjunto.
- En la carpeta components se encuentras los componentes de react que no se consideran una vista tal cual, pero que son diferentes partes de la UI.
- En la carpeta reducer se declaran los reducers usados en redux para gestionar la lógica de los estados.
- En la carpeta service se provee de un mock donde se simula a una llamada asíncrona.
- En la carpeta store se declara la configuración de redux en el index, hay un archivo hooks que sirve para que de forma dinámica los hooks de `react-redux` infieran el tipo de los reducers. En la carpeta sagas se encuentra la saga utilizada para la llamada asíncrona
- En la carpeta styles hay un archivo colors donde se declaran los colores oficiales para poder importarlos en cualquier componente y un archivo styledComponents donde se declaran aquellos componentes de material-ui estilados con la librería de style-components que se pueden usar en más de un componente para no declararlos varias veces.
- En la carpeta utils hay un archivo validations donde se declaran las funciones de comprobacion de que las contraseñas sean identicas y otra con un regex que verifique que se cumplen los requisitos de las contraseñas.
-En la carpeta views se encuentran los componentes que se consideran una vista completa en sí, junto con sus respectivos archivos de estilos css.


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
- [Notiflix](https://notiflix.github.io/) - Librería para notificaciones
- [Styled-components](https://styled-components.com/) - Librería para estilar componentes o crearlos de cero

## Autor 🧑🏻‍🚀

- **Raúl Andrade** - _Desarrollador front end_ - [randrade](https://www.linkedin.com/in/raul-andrade82/)


