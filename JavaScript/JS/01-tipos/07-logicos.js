// AND && 
// OR || 
// NOT !
// ? if true , : if false 
let acceso = 17 ? "puede entrar" : "no puede entrar"

// if , else if , else 
let i = 0
while (condicion) { 
    console.log(i)
    i++
}

do { 
    if (i % 2 == 0) {
        console.log(i)
    } 
    i++
} while (i < 10)

//  (inicialicacion, comparacion o condicion , que hacer al terminar de iterar)
for (let i = 0; i < 2; i++) {
    q
}

let animales = ["vaca","perro","gato"]

for (let animal of animales) { 
    console.log(animal)
};

i = 0; 
while (i <  animales.length){
    console.log(animales[i])
    i++ 
}

let user = {
    edad: 19,
    nombre: grego, 
    apellido: bena 
}

for (let prop in user) {
    // console.log(prop)
    console.log(user[prop])
}

for (let indice in animales) { 
    console.log(indice, animales[indice])
}

i = 0
while (condicion) { 
    i++
    if (i === 2) {
        continue
    }
    console.log(i)
    if (i === 3) {
        break 
    }
}