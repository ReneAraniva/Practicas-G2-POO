// 5. Sistema de gestión de estudiantes
class Estudiante {
  constructor(nombre, edad) {
      // Se inicializan los datos del estudiante
      this.nombre = nombre;
      this.edad = edad;
      this.calificaciones = []; // Array vacío para almacenar calificaciones
  }

  // Método para agregar una calificación al estudiante
  agregarCalificacion(calificacion) {
      this.calificaciones.push(calificacion);
  }

  // Método para calcular el promedio de calificaciones
  calcularPromedio() {
    if (this.calificaciones.length === 0) return 0; // Si no hay calificaciones, devuelve 0
    
    let suma = 0;
    for (let i = 0; i < this.calificaciones.length; i++) {
        suma += this.calificaciones[i]; // Sumar cada calificación
    }
    return suma / this.calificaciones.length; // Calcular el promedio
  }

  // Método para mostrar la información del estudiante
  mostrarInfo() {
      return `Estudiante: ${this.nombre}, Edad: ${this.edad}, Promedio: ${this.calcularPromedio()}`;
  }
}


// Crear un nuevo estudiante
const estudianteMaria = new Estudiante("María Gómez", 20);

// Agregar calificaciones al estudiante
estudianteMaria.agregarCalificacion(8.5);
estudianteMaria.agregarCalificacion(9.0);
estudianteMaria.agregarCalificacion(7.8);

// Mostrar la información del estudiante, incluyendo el promedio
console.log(estudianteMaria.mostrarInfo());

// Agregar más calificaciones
estudianteMaria.agregarCalificacion(9.2);

// Mostrar nuevamente la información del estudiante con el nuevo promedio
console.log(estudianteMaria.mostrarInfo());