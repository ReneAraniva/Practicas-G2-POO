class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(NuevoNombre) {
        if (typeof NuevoNombre === 'string' && NuevoNombre.length > 0) {
            this._nombre = NuevoNombre;
        }else{
            console.log('Nombre invalido');
        }
    }
}

const persona = new Persona("Juan");
console.log(persona.nombre);
persona.nombre = "Carlos";
console.log(persona.nombre);
persona.nombre = "";
console.log(persona.nombre);
persona.nombre = 5;
