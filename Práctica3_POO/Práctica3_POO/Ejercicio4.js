// 4. Sistema de gestión de productos
class Producto {
  constructor(nombre, precio, stock) {
      // Se inicializan los datos del producto
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
  }

  // Método para agregar stock a un producto
  agregarStock(cantidad) {
      this.stock += cantidad;
  }

  // Método para vender un producto, verificando que haya stock disponible
  venderProducto(cantidad) {
      if (cantidad <= this.stock) {
          this.stock -= cantidad;
      } else {
          console.log("Stock insuficiente");
      }
  }

  // Método para mostrar la información del producto
  mostrarInfo() {
      return `Producto: ${this.nombre}, Precio: ${this.precio}, Stock: ${this.stock}`;
  }
}

//Ejemplo de uso:
// Crear un nuevo producto
const productoLaptop = new Producto("Laptop", 1200, 50);

// Mostrar la información del producto
console.log(productoLaptop.mostrarInfo());

// Agregar stock al producto
productoLaptop.agregarStock(30);
console.log("Después de agregar stock:", productoLaptop.mostrarInfo());

// Vender productos (intentar vender 40 unidades)
productoLaptop.venderProducto(40);
console.log("Después de vender 40 unidades:", productoLaptop.mostrarInfo());

// Intentar vender más productos de los que hay en stock
productoLaptop.venderProducto(50); // Esto mostrará "Stock insuficiente"

// Consultar la información final del producto
console.log("Información final del producto:", productoLaptop.mostrarInfo());