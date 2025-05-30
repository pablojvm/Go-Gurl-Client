# GO-Gurl

[Logo](./public/logo.png)

## DESCRIPCION

Go-Gurl es un espacio queer que nos trae información acerca del fascinante mundo de Drag Race España. Podemos ver información acerca de las reinas que han participado en esete formato, de las temporadas que han salido y hasta de los episodios que se han emitido. También podras añadir a tus reinas favoritas a una lista de favoritos.

## Tecnologias y librerias

- HTML, JS, CSS
- Servidor Local JSON/ Node
- BootStrap
- React 
- Vite

## Funcionalidades

- Crear reina nueva
- Eliminar reina nueva
- Editar cualquier reina
- Añadir reinas a favoritos
- Cambiar fotos de reinas(si estas tienen varias)
- Barra de busqueda para encontrar el episodio, la temporada o reina que estes buscando

# Estructura

## User Stories

- 404 - Pagina para el error 404NotFound
- 500 - Pagina para errores de data
- Home - Pagina inicial
- InformationPage- Pagina de busqueda
- Information Queen - Pagina de detalles de una reina
- Information Season - Pagina de detalles de una temporada
- Information Episode - Pagina de detalles de un episodio
- YourList - Pagina donde encontrarás tu lista de favoritos
- AboutUs - Pagina donde encontrarás información acerca del programador del sitio web

# Rutas

- /yourLists - Tu lista de favoritos
- /informationPage - Pagina de informacion y busqueda
- /createQueen - Pagina de creación de reina nueva
- /informationPage/queens/:idDragQueen - Pagina de detalles de una reina
- /informationPage/seasons/:idSeason - Pagina de detalles de una temporada
- /informationPage/episodes/:idEpisode - Pagina de detalles de un episodio
- /* - Pagina de error 404
- /500 - Pagina de error 500

# Otros componentes

- NavBar
- Footer

# Links

- Repositorio : https://github.com/pablojvm/Go-Gurl-Client
- Repositorio server: https://github.com/pablojvm/Go-Gurl-Server 
- Deploy : go-gurl.netlify.app
- Slides : https://www.canva.com/design/DAGo6_bagJg/1kuTT2hezV4vzlZ04LPFPw/edit