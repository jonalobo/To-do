//Entrada de dato
const entrada = document.querySelector('input')
//Botón para agregar el dato
const btn = document.querySelector('button')
//Contenedor padre donde se renderizarán los datos en el DOM
const contenedorLista = document.querySelector('.lista')
//Selector de prioridad
const selector = document.getElementById('opciones')
//Arreglo que almacenará los datos en forma de objetos
const DATOS = []

//Llave para el localStorage
/* const KEY = 'tareas' */



//Renderizar el localstorage al cargar la pagina
/* document.addEventListener('DOMContentLoaded', renderizarAlCargar()) */

//Validación de datos de entrada
const validar = (dato)=>{
    if(dato != ''){
        return dato
    } else {
        alert('Debes agregar una tarea')
    }
}
//Comportamiento al click del botón
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    //Primer validación
    if(validar(entrada.value)){
        //Renderizar el dato en el DOM
        imprimir(selector.value)
        //Limpiar el input
        entrada.value = ''
    }
})

//función para eliminar el elemento seleccionado
contenedorLista.addEventListener('click', (e)=>{
    const borrar = e.target.classList.contains('borrar')
    if (borrar) {
        e.target.parentElement.parentElement.remove()
    }
})

//Validación para la edición de la tarea
/* function editarTarea(tarea) {
    if (entrada.value == tarea ) {
        
    }
}  */

//Función para mostrar la tarea en el input y editarla
contenedorLista.addEventListener('click',(e) => {
    const editarDato = e.target.classList.contains('editar')
    if(editarDato){
        //Obtengo el texto para enviarlo al input
        const tareaAEditar = e.target.parentElement.parentElement
        const texto = tareaAEditar.firstChild.nodeValue
        entrada.value = texto
        tareaAEditar.remove()
    }
})

//Función delegation para enviar el texto al input.
/* contenedorLista.addEventListener('click', (e)=>{
    const editarTarea = e.target.classList.contains('editar')
    if (editarTarea) {
        
    }
}) */

//función para enviar información al localStorage
/* function enviarALocalStorage(tarea) {
    const objetoTareaString = JSON.stringify(tarea)
    localStorage.setItem(KEY,objetoTareaString)
}  */

//Funcion para renderizar al cargar el DOM
//Debe ser función para que se llame de primero.***********
/* function renderizarAlCargar() {
    const tareasLocalStorage = JSON.parse(localStorage.getItem(KEY))
    tareasLocalStorage.forEach(objeto => {
        const { tarea, prioridad } = objeto
        imprimirAlCargar(tarea, prioridad)
    });
} 
 */
//Función para eliminar de lOcalStorage

/* const eliminar = (objeto)=>{
    const { id } = objeto
} */

//Función para indicar cual prioridad se va a renderizar

function imprimir(prioridad) {
    //Creamos la constante con el valor del input global
    const tarea = entrada.value
        //Lógica del selector
        if(prioridad == 'baja'){
            const HTML = `<ol class="tarea baja">${tarea}<div class="opciones"><span class="borrar">X</span><div class="editar">edit</div></div></ol>`;
            contenedorLista.innerHTML += HTML
            const objetoTarea = {
                tarea,
                /* id: Date.now(), */
                prioridad
            }
            DATOS.push(objetoTarea)
            /* enviarALocalStorage(DATOS) */

        }else if(prioridad == 'media'){
            const HTML = `<ol class="tarea media">${tarea}<div class="opciones"><span class="borrar media">X</span><div class="editar">edit</div></div></ol>`;
            contenedorLista.innerHTML += HTML
            const objetoTarea = {
                tarea,
                /* id: Date.now(), */
                prioridad
            }
            DATOS.push(objetoTarea)
            /* enviarALocalStorage(DATOS) */

        }else if(prioridad == 'alta'){
            const HTML = `<li class="tarea  alta">${tarea}<div class="opciones"><span class="borrar alta">X</span><div class="editar">edit</div></div></li>`;
            contenedorLista.innerHTML += HTML
            const objetoTarea = {
                tarea,
                /* id: Date.now(), */
                prioridad
            }
            DATOS.push(objetoTarea)
            /* enviarALocalStorage(DATOS) */
        }
}


//Funcion especifica para renderizar lo que esta en el localstorage
function imprimirAlCargar(tarea, prioridad) {
        if(prioridad == 'baja'){
            const HTML = `<ol class="tarea baja">${tarea}<div class="opciones"><span class="borrar">X</span><div class="editar">edit</div></div></ol>`;
            contenedorLista.innerHTML += HTML
            const objetoTarea = {
                tarea,
                /* id: Date.now(), */
                prioridad
            }
            DATOS.push(objetoTarea)
            /* enviarALocalStorage(DATOS) */

        }else if(prioridad == 'media'){
            const HTML = `<ol class="tarea media">${tarea}<div class="opciones"><span class="borrar media">X</span><div class="editar">edit</div></div></ol>`;
            contenedorLista.innerHTML += HTML
            const objetoTarea = {
                tarea,
                /* id: Date.now(), */
                prioridad
            }
            DATOS.push(objetoTarea)
            /* enviarALocalStorage(DATOS) */

        }else if(prioridad == 'alta'){
            const HTML = `<li class="tarea  alta">${tarea}<div class="opciones"><span class="borrar alta">X</span><div class="editar">edit</div></div></li>`;
            contenedorLista.innerHTML += HTML
            const objetoTarea = {
                tarea,
                /* id: Date.now(), */
                prioridad
            }
            DATOS.push(objetoTarea)
            /* enviarALocalStorage(DATOS) */
        }
}



