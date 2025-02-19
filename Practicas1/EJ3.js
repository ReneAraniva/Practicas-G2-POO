class DispensarElectonico {
    constructor(Producto,Precio) {
        this.Producto = Producto;
        this.Precio = Precio;
    }

    DarProducto(){
        return `El cliente pidio un ${this.Producto}
         con el precio de $${this.Precio}`;
    }
}

const Cliente1 = new DispensarElectonico("Coca-cola", 1.00);
const Cliente2 = new DispensarElectonico("Fanta", 0.75);
const Cliente3 = new DispensarElectonico("7up", 0.75);

console.log(Cliente1.DarProducto());
console.log(Cliente2.DarProducto());
console.log(Cliente3.DarProducto());
