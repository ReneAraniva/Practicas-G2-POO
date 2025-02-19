class Auto {
    constructor(marca,modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    arrancar() {
        console.log(`El ${this.marca} ${this.modelo} esta arrancando`);
    }

    detener() {
        console.log(`El ${this.marca} ${this.modelo} esta detenido`);
    }
}

const auto = new Auto("Ford","Fiesta");
auto.arrancar();
auto.detener();
auto.marca = "Chevrolet";
auto.modelo = "Corsa";
auto.arrancar();
auto.detener();