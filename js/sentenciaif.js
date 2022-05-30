debugger

let username = prompt("Ingrese su nombre: ")

if(username == "Coderhouse") {
    console.log("Bienvenido", username)
} else {
    console.warn("No")
}

let perrito = 8.8

gatito = parseInt(perrito)

console.log(gatito)


let numero = prompt("Dame un número: ")

if(numero > 1000) {
    alert("Es mayor a 1000")
} else if(numero >= 10 && numero <= 50) {
    alert("est[a entre 10 y 50")
}