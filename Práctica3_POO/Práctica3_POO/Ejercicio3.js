// 3. Sistema de gestión de empleados
class Empleado {
  constructor(nombre, puesto, salario) {
      // Se inicializan los datos del empleado
      this.nombre = nombre;
      this.puesto = puesto;
      this.salario = salario;
  }

  // Método para calcular el salario anual multiplicando por 12
  calcularSalarioAnual() {
      return this.salario * 12;
  }

  // Método para aumentar el salario en un porcentaje dado
  aumentarSalario(porcentaje) {
      this.salario += this.salario * (porcentaje / 100);
  }
}

//Ejemplo de uso:
// Crear un nuevo empleado
const empleadoJuan = new Empleado("Juan Pérez", "Desarrollador", 3000);

// Consultar el salario anual de Juan
console.log("Salario anual de Juan:", empleadoJuan.calcularSalarioAnual());

// Aumentar el salario de Juan en un 10%
empleadoJuan.aumentarSalario(10);
console.log("Nuevo salario de Juan después del aumento:", empleadoJuan.salario);

// Consultar el nuevo salario anual de Juan
console.log("Nuevo salario anual de Juan:", empleadoJuan.calcularSalarioAnual());