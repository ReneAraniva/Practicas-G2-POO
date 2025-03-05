class Producto {
    constructor(nombre, precio, stock, descuento) {
        this.nombre = nombre;
        this.precio = precio;
        this.setStock(stock); // Validar stock
        this.setDescuento(descuento); // Validar descuento
    }

    // Métodos get y set para nombre
    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    // Métodos get y set para precio
    getPrecio() {
        return this.precio;
    }

    setPrecio(precio) {
        this.precio = precio;
    }

    // Métodos get y set para stock
    getStock() {
        return this.stock;
    }

    setStock(stock) {
        if (stock >= 0) {
            this.stock = stock;
        } else {
            throw new Error("El stock no puede ser negativo.");
        }
    }

    // Métodos get y set para descuento
    getDescuento() {
        return this.descuento;
    }

    setDescuento(descuento) {
        if (descuento >= 20 && descuento <= 40) {
            this.descuento = descuento;
        } else {
            throw new Error("El descuento debe estar entre el 20% y el 40%.");
        }
    }

    // Método para aplicar el descuento al precio
    aplicarDescuento() {
        this.precio -= this.precio * (this.descuento / 100);
    }

    // Método para reducir el stock del producto
    reducirStock(cantidad) {
        if (cantidad > 0 && cantidad <= this.stock) {
            this.stock -= cantidad;
        } else {
            throw new Error("La cantidad a reducir debe ser positiva y no mayor que el stock actual.");
        }
    }

    // Método para mostrar la información del producto
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Precio: ${this.precio}`);
        console.log(`Stock: ${this.stock}`);
        console.log(`Descuento: ${this.descuento}%`);
    }
}

// Ejemplo de uso
const producto = new Producto("Laptop", 1000.00, 50, 30);
producto.mostrarInformacion();

producto.aplicarDescuento();
producto.reducirStock(10);
producto.mostrarInformacion();