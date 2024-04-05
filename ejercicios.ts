
// Definir el tipo de las tareas
type Tarea = {
    nombre: string,
    estado: "en progreso" | "terminadas" | "pendientes",
    prioridad: 1 | 2 | 3
};

// Crear un array de tareas
const tareas: Tarea[] = [
    { 
        nombre: "Tarea1",
        estado: "pendientes",
        prioridad: 1
    },
    { 
        nombre: "Tarea2",
        estado: "en progreso",
        prioridad: 2
    },
    { 
        nombre: "Tarea3",
        estado: "pendientes",
        prioridad: 3
    },
    { 
        nombre: "Tarea4",
        estado: "terminadas",
        prioridad: 1
    },
    { 
        nombre: "Tarea5",
        estado: "pendientes",
        prioridad: 2
    },
    { 
        nombre: "Tarea6",
        estado: "en progreso",
        prioridad: 3
    },
    { 
        nombre: "Tarea7",
        estado: "pendientes",
        prioridad: 2
    },
    { 
        nombre: "Tarea8",
        estado: "pendientes",
        prioridad: 3
    },{ 
        nombre: "Tarea9",
        estado: "pendientes",
        prioridad: 2
    },
];

namespace ej1 {
//EJERCICIO 1

/* function tareasPendientes(tareas: Tarea[]) {
    for(let i = 0; i < tareas.length; i++){
        if( tareas[i].estado === "pendientes") {
            console.log(tareas[i].estado);
        }
    }

}

tareasPendientes(tareas); */

const tareasPendientes = tareas.filter(tarea => tarea.estado === "pendientes");
const tareasPendientesOrdenadas = tareasPendientes.sort((a, b) => a.prioridad - b.prioridad);


console.log(tareasPendientesOrdenadas);
}

namespace ej2 {
/*  2. Consulta a la API (1 punto)

Los inversores se quejan que las tareas tardan mucho en cargarse. Necesitamos adaptar el código anterior para que la carga se muestre de forma asíncrona.

Asumí que existe una función que devuelve el listado de tareas después de 3 segundos. Podés usar el ejemplo que hicimos en clase.
 */

async function ordenarTareasAsync() {
    const tareasPendientes = tareas.filter(tarea => tarea.estado === "pendientes");
    const tareasPendientesOrdenadas = await ordenarTareasPendientes(tareasPendientes);
    console.log(tareasPendientesOrdenadas);
}

async function ordenarTareasPendientes(tareasPendientes: Tarea[]): Promise<Tarea[]> {
    return new Promise((resolve, reject) => {
        const tareasPendientesOrdenadas = tareasPendientes.sort((a, b) => {
            // Si las prioridades son diferentes, ordena por prioridad
            if (a.prioridad !== b.prioridad) {
                return a.prioridad - b.prioridad;
            }
            // Si las prioridades son iguales, ordena por nombre
            return a.nombre.localeCompare(b.nombre);
        });
        resolve(tareasPendientesOrdenadas);
    });
}

ordenarTareasAsync();




















}

namespace ej3 {
    // Definir el tipo de las tareas
type Tarea = {
    nombre: string,
    estado: "en progreso" | "terminadas" | "pendientes",
    prioridad: 1 | 2 | 3,
    asignadoA: string
};

// Crear un array de tareas
const tareas: Tarea[] = [
    { 
        nombre: "Tarea1",
        estado: "pendientes",
        prioridad: 1,
        asignadoA: "Juan"
    },
    { 
        nombre: "Tarea2",
        estado: "en progreso",
        prioridad: 2,
        asignadoA: "María"
    },
    { 
        nombre: "Tarea3",
        estado: "pendientes",
        prioridad: 3,
        asignadoA: "Juan"
    }
];

// Función para obtener las tareas de una persona
function obtenerTareasDePersona(persona: string): Tarea[] {
    return tareas.filter(nombrePersona => nombrePersona.asignadoA === persona);
}

// Ejemplo de cómo usar la función para obtener las tareas de una persona
const tareasDeJuan = obtenerTareasDePersona("Juan");
console.log("Tareas de Juan:", tareasDeJuan);

}

namespace ej4 {
    /* Los inversores rompieron la base de datos metiendo cualquier texto en el campo de nombre de persona. Necesitamos una función que valide si un texto es un nombre de persona válido o no. Por ahora solo aceptemos que se escriba el nombre o el nombre y apellido.
     */

    function esNombrePersonaValido(texto: string): boolean {
        // Expresión regular para validar solo letras y espacios
        const regex = /[A-Za-z\s]+$/;
    
        // Verificar si el texto coincide con la expresión regular
        return regex.test(texto);
    }
    
    // Ejemplo de uso
    const nombre1 = "John"; // válido
    const nombre2 = "John Smith"; // válido
    const nombre3 = "John123"; // inválido
    const nombre4 = "John Smith123"; // inválido
    
    console.log(esNombrePersonaValido(nombre1)); // true
    console.log(esNombrePersonaValido(nombre2)); // true
    console.log(esNombrePersonaValido(nombre3)); // false
    console.log(esNombrePersonaValido(nombre4)); // false
    

}