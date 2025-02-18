class Persona {
    constructor(nombre,edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
    get nombre(){
        return this._nombre;
    }
    get edad(){
        return this._edad;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    set edad(nuevaEdad){
        this._edad = nuevaEdad;
        if (nuevaEdad >= 18) {
            this.mostrar();
         
        }else{
            console.log("Es menor de edad");
            
        }
    }
    mostrar(){
        let mensaje = `Mi nombre es ${this._nombre} y tengo ${this._edad} años`;
        console.log(mensaje);   
    }
}

let objeto = new Persona("Fran",21);
// objeto.mostrar();

// objeto.nombre ="Juan"
objeto.edad = 20;
// objeto.mostrar();
