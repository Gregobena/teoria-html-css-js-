function cualEsMayor(a,b) {
    return (a>b) ? a : b 
}

let mayor = cualEsMayor(10,5)
console.log(mayor)

function getbyIdx (arr, idx) {
    if ((idx > arr.length) || (idx < 0)) {
        return False 
    }
    return arr[idx]
}

let resultado = getbyIdx([1,2,3],0)

console.log(resultado)
let i = 0 
for (i = 0; i < 10; i++) {
    if (i % 2 != 0) {
        console.log('impar', i)
    }
}

function valorMayorArray (arr) {
    max = 0 
    min = 999
    for (num of arr) {
        if (num > max) {
            max = num
        }
        if (num < min ) {
            min = num 
        }
    }
    return [max, min]
}

function valorMayorArray (arr) {
    let menor = arr[0]
    let mayor = arr[0]
    for (num of arr) {
        menor = menor < num ? menor : num 
        mayor = mayor > num ? mayor : num 
    }
    return [menor, mayor]
}


console.log(valorMayorArray([1,2,19,-2,4,5]))

function numerosPositivos (arr) {
    let i = 0
    for (num of arr) {
        if (num >= 0) {
            i++
        }
    }
    return i 
}

console.log(numerosPositivos([1,2,3,-2-3-1]))

function precioCompleto (precio,impuesto){
    return precio + (precio * impuesto)
}

let array = [{
    id: 1, 
    name: "nicolas",
},
{
    id: 2,
    name: "chanchito",
},
{
    id:3 , 
    name : "nicolas",
},
]


function toPairs (arr) {
    let pairs = []
    for (indice in arr) {
        elem = arr[indice]
        pairs[indice] = [elem.id , elem]
    }
    return pairs 
}

pairs = toPairs(array)
console.log(pairs)

function toCollection(pairs) { 
    let colect = []
    for (indice in pairs) {
        elemento = pairs[indice][1]
        colect[indice] = elemento 
    }
    return colect 
}

console.log(toCollection(pairs))

function crearArray (n) { 
    if (n <= 0) {
        return []
    }
    let arra = []
    for (let i = 0; i < n; i++){
        arra[i] = i + 1 
    }
    return arra 
}

arr = crearArray(10) 
console.log(arr)
