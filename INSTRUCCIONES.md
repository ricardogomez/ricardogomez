# Instrucciones

## Actualizar

Se actualiza automáticamente cuando se guardan los cambios. Utiliza netlify.com asociada a ésta cuenta de github.

## Imágenes

Usa http://imageoptimizer.net

Hay que hacer dos versiones:

- Tamaño grande: máximo 340px de ancho (width)
- Tamaño pequeño: máximo 170px de alto (height)

Acuérdate que el **nombre de la imágen** va sin tildes, sin espacios, en minúscula. También debe llevar la extensión (png o jpg). Por ejemplo: tres-historias-con-gato-peq.png

## Páginas

Cada página es un fichero con extensión `.md` (markdown) dentro de la carpeta `paginas`. Por ejemplo: https://github.com/ricardogomez/ricardogomez/blob/master/paginas/contacto.md

Cada página está asociada a una [url](https://es.wikipedia.org/wiki/Localizador_de_recursos_uniforme) de tu web. Por ejemplo si en github tienes `paginas/contacto.md`, en tu web se verá en http://ricardogomez.com/contacto. Si en github tienes `paginas/mi-carpeta/mi-pagina.md` en la web se verá en http://ricardogomez.com/mi-carpeta/mi-pagina. Para seguir la costumbre de internet es mejor que **los nombres de las páginas sean todo en minúsculas, sin tiles y en vez de espacios, guiones altos `-`**.

#### Cabecera y cuerpo

Todas tus páginas tienen dos partes: la cabecera y el contenido en si. Por ejemplo, abre https://github.com/ricardogomez/ricardogomez/edit/master/paginas/contacto.md (tienes que estár identificado). La cabezera es ésta:

```
---
titulo: "Contactar"
subtitulo: ""
---
```

Empieza y acaba con tres guiones y tiene básicamente dos etiquetas, `titulo` y `subtitulo` (de nuevo, sin tildes). Estos corresponden, obvio, con el título y el subtítulo de tu página. El subtítulo es opcional, se puede dejar en blanco, pero el título no.

**Es obligatorio** que todas las páginas tengan una cabecera. Si creas una página nueva, tienes que añadir la cabecera.

El resto del fichero es el contenido de la página. Está escrito en markdown, igual que siempre. Puedes ver un resúmen de su sintáxis en la wikipedia: https://es.wikipedia.org/wiki/Markdown#Ejemplos_de_sintaxis

#### Códigos especiales: insertar imágenes, añadir libros...

Hay una serie de códigos especiales para cosas específicas de tu web.

**Para añadir imágenes escribe:** `{{ imágen /imagenes/conferencias/842postre2.jpg pos: izq texto: El postre }}`

**Para añadir un libro escribe:** `{{ libro "Título del libro" imágen: /imagenes/portada.jpg página: /mislibros/mi-libro }}`
