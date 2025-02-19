class Persona {
    constructor(id, nombre, telefono, genero, departamento) {
    this._id = id;
    this._nombre = nombre;
    this._telefono = telefono;
    this._genero = genero;
    this._departamento = departamento;
    }

    get id() {
    return this._id;
    }

    set id(nuevoId) {
    this._id = nuevoId;
    }

    get nombre() {
    return this._nombre;
    }

    set nombre(VerficarNombre) {
        if (typeof VerficarNombre === "string" && VerficarNombre.length <= 20) {
            this._nombre = VerficarNombre;
        } else {
            console.error("El nombre debe tener como máximo 20 caracteres");
        }
    }

    get telefono() {
    return this._telefono;
    }

    set telefono(nuevoTelefono) {
        if (Number.isInteger(Number(nuevoTelefono)) && nuevoTelefono.length == 8) {
            this._telefono = nuevoTelefono;
            
        } else {
            this._telefono = "Número de teléfono inválido";
        }
    }

    get genero() {
    return this._genero;
    }

    set genero(nuevoGenero) {
        if (nuevoGenero === "M") {
            this._genero = "Masculino";
        } else if (nuevoGenero === "F") {
            this._genero = "Femenino";
        } else {
            this._genero = "Genero indefinido";        
        }
    }

    get departamento() {
    return this._departamento;
    }

    set departamento(area) {
        switch (area) {
            case "Ventas":
                this._departamento = "Ventas";
                break;
            case "Recursos Humanos":
                this._departamento = "RRHH";
                break;
                case"Administración":
                this._departamento = "Administración";
                break;
            default:
                this._departamento = "Departamento no válido";
                break;
        }
    
    }

    mostrarInformacion() {
    console.log(`ID: ${this._id}`);
    console.log(`Nombre: ${this._nombre}`);
    console.log(`Teléfono: ${this._telefono}`);
    console.log(`Género: ${this._genero === "M" ? "Masculino" : "Femenino"}`);
    console.log(`Departamento: ${this._departamento}`);
    }

   }
   
   const persona1 = new Persona(1, "Juan Pérez", "12345678", "M", "Ventas");
   persona1.mostrarInformacion();
   persona1.id = 2;
   persona1.nombre = "Ana Gómez";
   persona1.telefono = "98765432444";
   persona1.genero = "F";
   persona1.departamento = "Recursos Humanos";
   persona1.mostrarInformacion();