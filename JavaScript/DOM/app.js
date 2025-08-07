const contenedor = document.getElementById("contenedor")
console.log(contenedor.innerHTML) 
// convierte en un string la estructura html 
const titulo = document.getElementById('titulo')
console.log(titulo.innerText)

const toppings = document.getElementsByClassName("topping")
// toppings es un array con los elementos
console.log(toppings[0].id)

const misToppings = document.getElementsByTagName("li")
console.log(misToppings)

// CSS 

// .querySelector() agarra el primero que cumpla la condicion, . , # , o lo q tenga
const toppingss = document.querySelector(".topping.fondo-naranja")
console.log(toppingss)

const toppings2 = document.querySelector("ul li.fondo-marron")
console.log(toppings2)

// los que no cumplan la condicion 

const toppingNOTMarron = document.querySelector('ul li:not(.fondo-marron)')
console.log(toppingNOTMarron)

// querySelectorAll() 

const toppingAll = document.querySelectorAll(".topping.fondo-naranja")
console.log(toppingAll) 


const primerTopping = document.querySelector(".topping")
primerTopping.style.backgroundColor = "blue"
primerTopping.style.color = "#6dff00" 

const listaTopings = document.getElementById("lista-toppings")
console.log(listaTopings.innerText)

const tituloToppings = document.getElementById("titulo")
tituloToppings.innerText = "Mis Toppings Favoritos"

const enlaces = document.getElementsByTagName("a")
/*
enlaces[0].getAttribute("href")
enlaces[0].removeAttribute("href")
enlaces[0].setAttribute("href","nuevovalor")
 */

// CLASES .classList

primerTopping.classList
primerTopping.classList.add("nueva-clase")
console.log(primerTopping.classList)
primerTopping.classList.contains("fondo-marron") // TRUE OR FALSE 
primerTopping.classList.remove("nueva-clase")
console.log(primerTopping.classList)

// CREAR ELEMENTO
// listaTopings
const nuevoTopping = document.createElement("li")
nuevoTopping.innerText = "Queso Extra"
nuevoTopping.classList.add("topping","fondo-marron")

listaTopings.append(nuevoTopping)

nuevoTopping.remove()
