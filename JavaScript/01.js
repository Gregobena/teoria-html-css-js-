// OBJETOS 

let email ="grego@gmail.com"
let nombre= "grego"
let direccion = {
    calle : "28",
    num : "2248",
}

let user = {
    email : "grego@gmail.com",
    nombre : "grego",
    direccion : {
        calle : "28",
        num : "2248",
    }, 
    activo:true,
    recuperarClave: function () { 
        console.log("recuperando clave...")
    },
}

// DINAMISMO 

const userDos = {id:1} 

userDos.name = "Nicolas"
userDos.guardar = function () {
    console.log("guardando...",userDos.name)
}
delete userDos.guardar  
delete userDos.name 
console.log(userDos)

const userTres = Object.freeze({id:1}) // Friza
const userTres1 = Object.seal({id:1}) // permite modificacion no añadir propiedades
 
// FACTORY FUNCTIONS 

function crearUsuario (name,email) {
    return {
        email,
        name, 
        activo:true,
        recuperarClave: function () { 
            console.log("recuperando clave...")
        },
    }
}

let user4 = crearUsuario("nicolas","nico@gmail.com")
let user5 = crearUsuario("felipe","felipe@gmail.com")

// FUNCIONES CONSTRUCTORAS 
function Usuario() {
    this.id = 1
    this.recuperarClave =function () { 
        console.log("recuperando clave...")
    }
}

let usuario = new Usuario()
console.log(usuario)

// FUNCIONES 
function UsuarioDos (nombre) {  // pueden tener atributos 
    this.nombre = nombre
}

console.log(UsuarioDos.nombre)
console.log(UsuarioDos.length) // cant de parametros => function (parametro)

const U = UsuarioDos
let persona = new U("Nicolas")

function of(Fn, arg) { // pasar una funcion por parametro 
    return new Fn(arg)
}

user1 = of(UsuarioDos,"carlos")
console.log(user1)

function returned() { // se pueden retornar las funciones 
    return function () {
            console.log("hola mundo")
    }
}
let saludo = returned()
saludo()

// Function (con F mayus)

function Punto(x,y) {
    this.x = x 
    this.y = y 
    this.dibujar = function() {console.log("dibujando...")}
}

let punto = { z : 7}
Punto.call({punto},1,2) // le da los valores de this x y this y con los pasados y el de punto
Punto.apply({punto}, [1,2]) // es con un array para x e y 