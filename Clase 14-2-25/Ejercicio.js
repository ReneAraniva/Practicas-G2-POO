class Persona {
    constructor(nombre,edad,telefono,dui) {
        this._nombre = nombre;
        this._edad = edad;
        this._telefono = telefono;
        this._dui = dui;
    }

    get nombre(){
        return this._nombre;
    }
    get edad(){
        return this._edad;
    }
    get telefono(){
        return this._telefono;
    }
    get dui(){
        return this._dui;
    }   

    set dui(comprobar){
        if (/^\d{9}$/.test(comprobar)) {
            this._dui = comprobar;
        } else {
            console.log("DUI inválido. Debe contener exactamente 9 dígitos y no tener caracteres no deseados.");
        }
    }
}

let persona = new Persona("Nelson", 30, "12345678", "123456789");
console.log(persona.dui);

persona.dui = "987654321";
console.log(persona.dui);

persona.dui = "12345abc";
console.log(persona.dui);