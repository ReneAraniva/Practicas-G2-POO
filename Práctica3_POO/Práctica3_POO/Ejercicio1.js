// 1. Sistema de gestión de libros
// Esta clase representa una biblioteca con métodos para agregar, buscar y mostrar libros.
class Biblioteca {
  constructor() {
    // Inicializamos un array vacío para almacenar los libros
    this.libros = [];
  }

  // Método para agregar un libro a la biblioteca
  agregarLibro(titulo, autor, anio) {
    this.libros.push({ titulo, autor, anio });
    console.log(`Libro agregado: "${titulo}" de ${autor} (${anio})`);
  }

  // Método para buscar un libro por su título
  buscarLibro(titulo) {
    const libro = this.libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
      if (libro) {
        console.log(`Libro encontrado: "${libro.titulo}" de ${libro.autor} (${libro.anio})`);
        return libro;
      } else {
        console.log("Libro no encontrado");
      return "Libro no encontrado";
      }
  }

  // Método para mostrar todos los libros almacenados
  mostrarLibros() {
    if (this.libros.length === 0) {
      console.log("No hay libros en la biblioteca.");
      return;
    }
    console.log("Lista de libros en la biblioteca:");
    this.libros.forEach((libro, index) => {
      console.log(`${index + 1}. "${libro.titulo}" de ${libro.autor} (${libro.anio})`);
    });
  }
}

// Ejemplo de uso:
const miBiblioteca = new Biblioteca();
//Agregamos los libros
miBiblioteca.agregarLibro("Cien años de soledad", "Gabriel García Márquez", 1967);
miBiblioteca.agregarLibro("1984", "George Orwell", 1949);
miBiblioteca.agregarLibro("El Principito", "Antoine de Saint-Exupéry", 1943);

//MOstramos los libros
miBiblioteca.mostrarLibros();

//Buscamos los libros
miBiblioteca.buscarLibro("1984");
miBiblioteca.buscarLibro("Harry Potter");