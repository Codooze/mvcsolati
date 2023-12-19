# Proyecto de Biblioteca con Next.js y Supabase

Este proyecto es una aplicación web de biblioteca construida con Next.js y Supabase. Permite a los usuarios gestionar una colección de libros, incluyendo la creación, edición y eliminación de libros.

## Cómo ejecutar el proyecto

Para ejecutar este proyecto, primero necesitas instalar las dependencias. Puedes hacerlo con el siguiente comando:

```sh
pnpm i
```

Una vez que las dependencias estén instaladas, puedes iniciar el proyecto con:

```sh
pnpm run dev
```

¡Y eso es todo! Ahora deberías poder ver el proyecto ejecutándose en tu navegador local.

## Puntos clave del proyecto

Este proyecto utiliza Next.js como marco de trabajo de front-end y Supabase para la gestión de la base de datos. Aquí están algunos de los puntos clave:

- **Modelo de la biblioteca**: El modelo de la biblioteca se encuentra en [`app/models/libraryModel.ts`](command:_github.copilot.openSymbolInFile?%5B%22app%2Fmodels%2FlibraryModel.ts%22%2C%22app%2Fmodels%2FlibraryModel.ts%22%5D "app/models/libraryModel.ts"). Este archivo contiene funciones para interactuar con la base de datos de Supabase, incluyendo `getBooks`, `editBook`, `deleteBook` y `createBook`.

- **Controlador de la biblioteca**: El controlador de la biblioteca se encuentra en [`app/controllers/libraryController.ts`](command:_github.copilot.openSymbolInFile?%5B%22app%2Fcontrollers%2FlibraryController.ts%22%2C%22app%2Fcontrollers%2FlibraryController.ts%22%5D "app/controllers/libraryController.ts"). Este archivo actúa como un puente entre el modelo y la vista, y contiene lógica adicional para procesar los datos que devuelve el modelo.

- **Vista de la biblioteca**: La vista de la biblioteca se encuentra en [`app/views/LibraryView.tsx`](command:_github.copilot.openSymbolInFile?%5B%22app%2Fviews%2FLibraryView.tsx%22%2C%22app%2Fviews%2FLibraryView.tsx%22%5D "app/views/LibraryView.tsx"). Este archivo es un componente React que muestra la interfaz de usuario de la biblioteca y maneja la interacción del usuario.

## Nota sobre las claves secretas

Para facilitar la configuración, he quitado el archivo [`.env.local`](command:_github.copilot.openRelativePath?%5B%22.env.local%22%5D ".env.local") del [`.gitignore`](command:_github.copilot.openRelativePath?%5B%22.gitignore%22%5D ".gitignore"). Esto significa que las claves secretas necesarias para el proyecto están disponibles en el repositorio. Sin embargo, en un entorno de producción, estas claves deberían mantenerse en secreto y no incluirse en el control de versiones.
