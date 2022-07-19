# Pokedex

Esta es una pagina hecha con el framework nextJS. Se creo un Pokedex que incluye a todos los pokemones (temporalmente hasta el 288).

### Como correr en local
Para correr la pagina en version local se tiene que haber instalado [nextJS](https://nextjs.org/) y las dos librerias especificadas al final. Dentro de una terminal hay que utilizar el comando "npm run dev" que levanta una version local de la pagina. Luego se puede ir a "localhost:3000" en el navegador para ver la pagina.

### Componentes
Para esta pagina se crearon dos componentes "PokeCard" y "PokeGrid".

PokeCard utiliza el componente Card de MUI(Material UI) para crear una carta que incluye 4 elementos, una image, el nombre y numero del pokemon y los dos posibles tipos del pokemon. Cada tipo tiene un estilo especial asignado en styles/global.css.

PokeGrid utiliza el componente Grid de MUI para ordenar las PokeCards en la pantalla. Se definio un grid con 4 cartas que se reduce flexiblemente con el ancho del navegador. dentro de cada pagina se muestran 16 cartas.

Además se utilizo el componente Pagination de MUI para paginar las cartas. sobre el grid hay un selector de pagina que actualiza las cartas mostradas.

### Imagenes
Cada pokemon tiene una imagen asociada, esta imagen esta guardad en public/pokemon. el nombre de estas imagenes sigue la convencion {pokemon_name}.png en minuscula.

### Librerias externas utilizadas
[MUI: Material UI](https://mui.com/)

[json-pokemon](https://www.npmjs.com/package/json-pokemon)
