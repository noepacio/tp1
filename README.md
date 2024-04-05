# TP1 de Programación Multimedial 4

## Metodología

Integrantes por equipo: 1

Se aprueba con:         6

### Objetivos

- Refrescar lo que saben de JavaScript, y verificar que todos hayan llegado con un nivel mínimo de manejo del lenguaje
- Que aprendan a modelar problemas básicos usando tipos de datos en TypeScript
- Que se aclaren las dudas de los requerimientos que puedan sonarles ambiguos

### Comentarios Adicionales

Estos ejercicios son "teóricos", por lo que están un poco alejados de un problema "de la vida real". Para ese tipo de ejercicios vamos a tener el TP2.

Quiero darles la mayor libertad posible para que los resuelvan como quieran. Incluso pueden no usar lo que vimos en clase si saben otra forma. Lo único que les pido es que:

- Estén hechos en TypeScript
- Todos los tipos de datos sean estáticos (o sea, que no haya ningún `any`)
- Me justifiquen en el oral por qué les pareció mejor opción que lo que vimos en clase

Cada ejercicio está relacionado a esta misma aplicación. Pero no hace falta que creen una aplicación entera que cumpla con todos los puntos. En cambio, cada ejercicio se considera aislado a los demás, a menos que el enunciado diga lo opuesto. Es parecido a lo que hicimos en clase con `Persona`, `Usuario`, etc.

Todos los ejercicios van a ser ejecutables en consola nada más. Usando, por ejemplo, `ts-node`. No vamos a agregar ningún HTML o estilo a nada de esto. De nuevo, como lo que hicimos en clase.

Pueden asumir cosas que no están aclaradas explícitamente. De hecho, espero que lo hagan. Hice a propósito los enunciados un poco ambiguos. Si igualmente tienen dudas, pregunten.

Recuerden que, por lo general, la solución más simple es la mejor.

----

## Entrega

### Código

Todo lo van a resolver en un repositorio de GitHub. Pueden forkear este mismo o crear uno nuevo.

La fecha límite es el Jueves 4 de Abril de 2024 a las 23:59 hs. Antes de ese horario me tienen que mandar el link del repo por mail a <me@diegofreijo.com>.

Tiene que haber una `tag` que se llame `tp1`. Ese commit es el que voy a corregir.

Si crearon branches por feature o por ejercicio, no los borren. Así puedo ver cómo estuvieron trabajando. Pero para este TP no es necesario que se vuelvan locos con GitFlow. Igual les recomiendo que lo practiquen si pueden porque para los demás TPs va a ser necesario.

### Reporte

En principio no es necesario un reporte para este TP. Pero si asumieron cosas que creen que no son obvias de entrada, les pido que creen un `README.md` en el repositorio (parecido a este que están leyendo) aclarando lo que haga falta. Aplica para decisiones que haya tomado, formas de ejecutar los ejercicios, etc.

### Defensa

Les voy a estar mandando horarios para que cada uno se conecte y tengamos la devolución por Google Meet o Teams. Así no usamos la hora de clase para eso y aburrimos a los que se quedan esperando afuera.

----

## Ejercicios

Vamos a desarrollar una aplicación para gestionar tareas. Va a ser el futuro Trello. Pero por ahora vamos a hacer una versión mínima (un MVP) hasta conseguir el primer millón de dólares de nuestros inversores. Después le agregaremos web 3, AI y metaverso 😄

### 1. Mostrar tareas (3 puntos)

Lo primero que queremos es que se muestren en consola todas las tareas que tiene pendientes el usuario. O sea, que aún no están terminadas. Ordenarlas por prioridad (Alta, Media, Baja).

### 2. Consulta a la API (1 punto)

Los inversores se quejan que las tareas tardan mucho en cargarse. Necesitamos adaptar el código anterior para que la carga se muestre de forma asíncrona.

Asumí que existe una función que devuelve el listado de tareas después de 3 segundos. Podés usar el ejemplo que hicimos en clase.

### 3. Asignaciones (2 puntos)

Ahora los inversores nos piden ver las tareas que tiene asignada cada persona. Así que necesitamos que, dado una persona, se muestren solo sus tareas de igual manera que en el punto 1. ¡OJO: apuntamos a tener millones de tareas en nuestra base de datos!

### 4. Validando personas (1 punto)

Los inversores rompieron la base de datos metiendo cualquier texto en el campo de nombre de persona. Necesitamos una función que valide si un texto es un nombre de persona válido o no. Por ahora solo aceptemos que se escriba el nombre o el nombre y apellido.

### 5. Fecha límite (1 punto)

La forma de ordenar tareas por prioridad no está alcanzando para saber qué hacer a continuación. Ahora queremos que las tareas se muestren de nuevo como en el punto 1, donde las de Alta prioridad aparecen siempre primero. Pero las demás van a, además, tener una fecha límite (deadline) que marca que debe completarse antes de cierto día. Ordenarlas por la fecha límite que tenga cargada esa tarea.

### 6. Descripción (2 puntos)

Los usuarios de nuestra beta necesitan más información para terminar cada tarea. Están pidiendo poder agregar o un campo de información o que puedan adjuntar un archivo. Como no nos decidimos, vamos a permitirles que puedan cargar alguno de los dos.

Mostrar de vuelta las tareas como en el punto 1. Si una tarea tiene la descripción en forma de campo de texto, mostrar esa descripción. Si tiene un archivo, mostrar un mensaje informando la ruta del mismo.
