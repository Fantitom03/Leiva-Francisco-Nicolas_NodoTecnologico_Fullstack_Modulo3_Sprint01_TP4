export default class Tarea {
    constructor(id, titulo, descripcion, completado = false){
        this.id = id; //Identificador único de la tarea
        this.titulo = titulo; //Titulo de la tarea
        this.descripcion = descripcion; //Descripción de la tarea
        this.completado = completado; //Estado de completado, por defecto es false

    }

    //Metodo para marcar una tarea como completada
    completar(){
        this.completado = true; //Cambia el estado de completado a true

    }

    validar(){
        if(!this.titulo || this.titulo.trim() === ''){
            throw new Error('El titulo de la tarea es obligatorio.');
        }
        
    }

}