class CuentaBancaria{
    //Propiedad privada para el saldo 
    #saldo;

    constructor(nombre,saldoInicial){
        this.nombre = nombre
        this.#saldo = saldoInicial
    }

    depositar(monto){
        if (monto > 0) {
            this.#saldo += monto;
            console.log(`Deposito exitoso. Nuevo saldo: $${this.#saldo}`);
            
        }else{
            console.log('El monto debe ser mayor a 0');
            
        }
    }

    obtenerSaldo(){
        return `Saldo disponible: $${this.#saldo}`
    }
}

const cuenta1 = new CuentaBancaria('Juan Perez', 1000)
console.log(cuenta1.obtenerSaldo());

cuenta1.depositar(500)
console.log(cuenta1.obtenerSaldo());

// console.log(cuenta1.#saldo);




