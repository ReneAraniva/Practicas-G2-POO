class Libro {
    constructor(titulo, autor, anioPublicacion, disponible, numPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
        this.disponible = disponible;
        this.setNumPaginas(numPaginas); // Validar número de páginas
    }

    // Métodos get y set para título
    getTitulo() {
        return this.titulo;
    }

    setTitulo(titulo) {
        this.titulo = titulo;
    }

    // Métodos get y set para autor
    getAutor() {
        return this.autor;
    }

    setAutor(autor) {
        this.autor = autor;
    }

    // Métodos get y set para año de publicación
    getAnioPublicacion() {
        return this.anioPublicacion;
    }

    setAnioPublicacion(anioPublicacion) {
        this.anioPublicacion = anioPublicacion;
    }

    // Métodos get y set para disponibilidad
    getDisponible() {
        return this.disponible;
    }

    setDisponible(disponible) {
        this.disponible = disponible;
    }

    // Métodos get y set para número de páginas
    getNumPaginas() {
        return this.numPaginas;
    }

    setNumPaginas(numPaginas) {
        if (numPaginas > 0) {
            this.numPaginas = numPaginas;
        } else {
            throw new Error("El número de páginas debe ser mayor que 0.");
        }
    }

    // Método para prestar el libro
    prestar() {
        if (this.disponible) {
            this.disponible = false;
        } else {
            throw new Error("El libro no está disponible para préstamo.");
        }
    }

    // Método para devolver el libro
    devolver() {
        if (!this.disponible) {
            this.disponible = true;
        } else {
            throw new Error("El libro ya está disponible.");
        }
    }

    // Método para mostrar la información del libro
    mostrarInformacion() {
        const estado = this.disponible ? "disponible" : "no disponible";
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Año de Publicación: ${this.anioPublicacion}`);
        console.log(`Estado: ${estado}`);
        console.log(`Número de Páginas: ${this.numPaginas}`);
    }
}

// Ejemplo de uso
const libro = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, true, 417);
libro.mostrarInformacion();

libro.prestar();
libro.mostrarInformacion();

libro.devolver();
libro.mostrarInformacion();