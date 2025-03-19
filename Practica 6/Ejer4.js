class Usuario {
    #claveSecreta
    constructor(nombre,clave) {
        this.nombre = nombre
        this.#claveSecreta = clave
    }
    #verificarClave(clave){
        return this.#claveSecreta === clave
    }

    autenticar(clave){
        if (this.#verificarClave(clave)) {
            console.log('Acceso concebido');
        } else {
            console.log('Acceso denegado');
        }
    }
}

const user1 = new Usuario('Carlos Perez','1234')
user1.autenticar('1234')
user1.autenticar('0000')



