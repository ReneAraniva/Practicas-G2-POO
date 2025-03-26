class Ataques{
    patada(){

    }
    salto(){

    }
    correr(){
        console.log('Este jugador no tiene este movimiento');
        
    }
}

class Jugador1 extends Ataques{
    constructor(nombre){
        super();
        this._nombre = nombre;
    }

    // correr(){
    //     console.log(`${this._nombre} corre por su vida`);
    // }
}

class Jugador2 extends Ataques{
    constructor(nombre){
        super();
        this._nombre = nombre;
    }

    correr(){
        console.log(`${this._nombre} corre con velocidad`);
    }
    patada(){
        console.log(`${this._nombre} da patadas voladoras`);
    }
}

class Jugador3 extends Ataques{
    constructor(nombre){
        super();
        this._nombre = nombre;
    }

    correr(){
        console.log(`${this._nombre} corre con velocidad`);
    }
    patada(){
        console.log(`${this._nombre} da patadas de peine`);
    }
    salto(){
        console.log(`${this._nombre} salta con astucia`);
    }

}
let jugador1 = new Jugador1('Slim');
let jugador2 = new Jugador2('Killer');
let jugador3 = new Jugador3('Kenon');
jugador1.correr();

jugador2.correr();
jugador2.patada();

jugador3.correr();
jugador3.patada();
jugador3.salto();