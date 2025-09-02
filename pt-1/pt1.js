var cores =["rosa", "azul", "verde"]
console.log(cores)


console.log(cores[0])
var cores =["rosa", "azul", "verde","roxo"]
console.log(cores)

cores[2] = "cinza"

for(var i = 0; i < 7; i++){
    console.log(cores[i])
}

for(var i = 0; i < cores.length; i++){
    console.log(cores[i])
}


var numeros = [ 2,4,6,8,10]
console.log(numeros)
let soma = 0;
for(var i = 0; i < numeros.length; i++){
    soma += numeros[i];
}
console.log("A soma é:", soma);