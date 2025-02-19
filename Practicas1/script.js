//Clase
class Presentacion {
    //Constructor con propiedades
    constructor(nombre, edad, departamento, telefono){
        this._nombre = nombre;
        this._edad = edad;
        this._departamento = departamento;
        this._telefono = telefono;
    }

    //Metodos, funciones o comportamientos
    informacion(){
        return `${this._nombre} , ${this._edad} , 
        ${this._departamento} , ${this._telefono}`
    }
}

//Obtiene información desde html y las almacena en las variables
nombre = prompt('Digite su nombre')
edad = prompt('Digite su edad')
departamento = prompt('Digite el departamento donde reside')
telefono = prompt('Digite su numero de telefono')

//Objeto
const Estudiante = new Presentacion(nombre, edad, departamento, telefono)

//Manda la información y la muestra en el html
document.getElementById('nombre').innerText = Estudiante._nombre
document.getElementById('edad').innerText = Estudiante._edad
document.getElementById('departamento').innerText = Estudiante._departamento
document.getElementById('telefono').innerText = Estudiante._telefono