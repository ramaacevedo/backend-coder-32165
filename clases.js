class Usuario{
    constructor(){
        this.nombre = 'Ramiro'
        this.apellido = 'Acevedo'
        this.libros = [
            {nombre: 'Padre Rico, Padre Pobre', autor: 'Robert Kiyosaki'},
            {nombre: 'La sombra del viento', autor: 'Carlos Ruiz Zafón'}
        ]
        this.mascotas = ['Perros', 'Gatos', 'Loros']
    }

    getFullName(){
        return `Mi nombre es ${this.nombre} ${this.apellido}`
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }

    conuntMascotas(){
        this.mascotas.length
    }

    addBook(nombre, autor){
        this.libros.push({nombre, autor})
    }

    getBookNames(){
        return this.libros.map(libros => libros.nombre)
    }
}

const newUser = new Usuario (this.nombre, this.apellido, this.libros, this.mascotas);
newUser.addBook('Sombra y Hueso', 'Leigh Bardugo');
console.log(newUser.getBookNames());