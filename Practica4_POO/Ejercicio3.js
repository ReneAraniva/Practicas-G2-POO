class Empleado {
    constructor(nombre, edad, salario, activo) {
        this.nombre = nombre;
        this.setEdad(edad); // Validar edad
        this.salario = salario;
        this.activo = activo;
    }

    // Métodos get y set para nombre
    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    // Métodos get y set para edad
    getEdad() {
        return this.edad;
    }

    setEdad(edad) {
        if (edad >= 18) {
            this.edad = edad;
        } else {
            throw new Error("La edad debe ser mayor o igual a 18 años.");
        }
    }

    // Métodos get y set para salario
    getSalario() {
        return this.salario;
    }

    setSalario(salario) {
        this.salario = salario;
    }

    // Métodos get y set para activo
    getActivo() {
        return this.activo;
    }

    setActivo(activo) {
        this.activo = activo;
    }

    // Método para aumentar el salario
    aumentarSalario(porcentaje) {
        if (porcentaje >= 5 && porcentaje <= 10) {
            this.salario += this.salario * (porcentaje / 100);
        } else {
            throw new Error("El aumento de salario debe estar entre el 5% y el 10%.");
        }
    }

    // Método para cambiar el estado del empleado
    cambiarEstado() {
        this.activo = !this.activo;
    }

    // Método para mostrar la información del empleado
    mostrarInformacion() {
        const estado = this.activo ? "activo" : "inactivo";
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Salario: ${this.salario}`);
        console.log(`Estado: ${estado}`);
    }
}

// Ejemplo de uso
const empleado = new Empleado("Juan Pérez", 25, 1500.00, true);
empleado.mostrarInformacion();

empleado.aumentarSalario(7.5);
empleado.cambiarEstado();
empleado.mostrarInformacion();