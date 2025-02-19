class Presentacion {
    constructor(nombre,apellido,edad,direccion,gusto) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direccion;
        this.gusto = gusto;
    }

    presentarse() {
        return `Hola, soy ${this.nombre} ${this.apellido}, tengo ${this.edad} años y vivo en ${this.direccion}. 
        Me gusta ${this.gusto}.`;
    }
}

const   Estudiante = new Presentacion('René', 'Araniva', 20, 'San Miguel Chinameca', 'jugar videojuegos');
console.log(Estudiante.presentarse());

