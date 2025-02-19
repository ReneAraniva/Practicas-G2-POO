class instrumento {
    constructor(nombre,tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    quieroAprender(){
        return `El estudiante ${this.nombre} quiere aprender a tocar ${this.tipo}.`;
    }

    seTocar(){
        return `El estudiante ${this.nombre} ya sabe tocar ${this.tipo}.`;
    }
}

const Estudiante = new instrumento("René","Guitarra");

console.log(Estudiante.quieroAprender());
console.log(Estudiante.seTocar());

