# Github, instrucciones de uso

Hola papá,

Esta vez no he tenido tiempo ni energías de montar un sistema de edición web, así que vamos a utilizar github.

Github permite tener repositorios (que son un espacio en un disco duro) y dentro de esos repositorios carpetas, ficheros, imágenes. Hay un repositorio (este que estás viendo en tu navegador: https://github.com/ricardogomez/ricardogomez) que contiene las imágenes y el texto de tu web.

El proceso será así: tu añades páginas, imágenes o haces modificaciones dentro de github, y cuando estás satisfecho con los cambios vas a http://ricardogomez.org/app/actualizar y un programa se encargará de actualizar tu web con esos cambios.

Se que no es tan inmediato como antes, pero confío en que te adaptes sin mucha dificultad. El sistema de edición de github es bastante cómodo, permite previsualizar cómo quedará tu html y subir imágenes arrastrando y soltando. Y sobretodo necesita mucho menos mantenimiento por mi parte! Github tiene otra ventaja (que en princpio no necesitamos, pero nunca se sabe) que es que guarda todos los cambios que has hecho. Es decir, que si _estropeas_ algo (o borras algo por accidente) es fácil recuperarlo de nuevo.

## Básicos

#### Antes de continuar... identifícate!

Para poder hacer cambios en tu web es necesario que te identifiques (login) en github: https://github.com/login
Tu usuario es `ricardogomez` y tu contraseña la tienes en un email.

#### Muévete por tu repositorio

Como puedes ver tu repositorio tiene dos carpetas, `imagenes` y `paginas` (aún en el siglo 21 las tildes no se llevan muy bien con algunas cosas de ordenadores). Si pinchas en una carpeta la abre; si pinchas en un fichero, lo muestra. Usa el botón de _atrás_ del navegador para subir un nivel. A veces es útil tener varias pestañas abiertas, por ejemplo una para las imágenes y otra para los textos. Irás encontrando tu manera.

#### Páginas

Cada página es un fichero con extensión `.md` (markdown) dentro de la carpeta `paginas`. Por ejemplo: https://github.com/ricardogomez/ricardogomez/blob/master/paginas/contacto.md

Esto mismo que estás leyendo es un fichero markdown en tu repositorio, pero como no está dentro de la carpeta `paginas` no aparecerá en tu web.

Cada página está asociada a una [url](https://es.wikipedia.org/wiki/Localizador_de_recursos_uniforme) de tu web. Por ejemplo si en github tienes `paginas/contacto.md`, en tu web se verá en http://ricardogomez.com/contacto. Si en github tienes `paginas/mi-carpeta/mi-pagina.md` en la web se verá en http://ricardogomez.com/mi-carpeta/mi-pagina. Para seguir la costumbre de internet es mejor que __los nombres de las páginas sean todo en minúsculas, sin tiles y en vez de espacios, guiones altos `-`__.



## Edición

#### Modificar páginas

Si te has identificado (has hecho _login_) podrás ver un icono de un lápiz justo encima del contenido de la página. Por ejemplo, este mismo texto que estás leyendo lo puedes editar. Busca el icono de lápiz (al lado de otro icono de una papelera para... sorpresa, borrar)

En la página de edición puedes ver cómo va a quedar tu texto (pulsando en `Preview changes`) o guardarlo (pulsando el bottom `Commit changes`)

Si _previsualizas los cambios_ (`Preview changes`) verás una cosa un poco rara: te enseña _a la vez_ mediante un código de colores los cambios que has hecho en comparación con lo que había antes. En general: verde es que has añadido, naranja que has modificado y rojo que has borrado. Si aparece un párrafo con una banda verde a la izquierda significa que has añadido ese párrafo. Si aparece una palabra con el fondo rojo significa que la has borrado, etcétera. Esto, que al principio puede ser engorroso, a la larga te puede ser útil para saber qué estás modificando.

#### Cabecera y cuerpo

Todas tus páginas tienen dos partes: la cabecera y el contenido en si. Por ejemplo, abre https://github.com/ricardogomez/ricardogomez/edit/master/paginas/contacto.md (tienes que estár identificado). La cabezera es ésta:

```
---
titulo: "Contactar"
subtitulo: ""
---
```

Empieza y acaba con tres guiones y tiene básicamente dos etiquetas, `titulo` y `subtitulo` (de nuevo, sin tildes). Estos corresponden, obvio, con el título y el subtítulo de tu página. El subtítulo es opcional, se puede dejar en blanco, pero el título no.

__Es obligatorio__ que todas las páginas tengan una cabecera. Si creas una página nueva, tienes que añadir la cabecera.

El resto del fichero es el contenido de la página. Está escrito en markdown, igual que siempre. Puedes ver un resúmen de su sintáxis en la wikipedia: https://es.wikipedia.org/wiki/Markdown#Ejemplos_de_sintaxis

#### Códigos especiales: insertar imágenes, añadir libros...

Hay una serie de códigos especiales para cosas específicas de tu web. 

__Para añadir imágenes escribe:__ `{{ imágen /imagenes/conferencias/842postre2.jpg pos: izq texto: El postre }}`

__Para añadir un libro escribe:__ `{{ libro "Título del libro" imágen: /imagenes/portada.jpg página: /mislibros/mi-libro }}`

#### Actualizar la web

Una vez que estés satisfecho con los cambios (es decir, que en github aparezca como a ti te gusta), puedes actualizar la web con esos cambios simplemente visitando: http://ricardigomez.org/app/actualizar . Como verás, tarda un poquillo (descarga los cambios de github y genera las páginas modificadas) así que es mejor editar primero en github y solo actualizar la página cuando estés seguro de los cambios.
