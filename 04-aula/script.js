/*
//vetor = array
var alunos = ("cristiano", "neymar","virginia","bambam")

//mostra todos os elementos do array
console.log(alunos)

//mostra uma posição especifica do array
console.log(alunos[2])

//troca um valor
alunos[3] = "tiririca"

//array com valores de varios tipos
var aleatorio = ["roda gigante", 8, "froagem", 1.5, 3, false, "dougras"]

//loop pra mostrar todos os valores do array 
for(var i = 0; i < 7; i++){
    console.log(aleatorio[i])
}

for(var i = 0; i < aleatorio.length; i++){
    console.log(aleatorio[i])
}

var times = ["flamengo", "rio branco", "cruzeiro"]

//index = numero da caixa no array
for(var index in times){
    console.log(index) //mostrar o numero da caixinha que descobriu
    console.log(times[index]) //mostrar o valor que tem dentro da caixinha 

}
    */


//manipulando arrays
var frutas =["maça", "uva", "pêra"]
console.log(frutas)

//push - adiciona o valor no fim do array
frutas.push("mamão")
console.log(frutas)

//pop - tira o ultimo valor e retorna ele

var frutaTirada = frutas.pop()
console.log(frutaTirada);

// shift - tira o primeiro valor e retorna ele 
var primeiraFruta = frutas.shift()
console.log(primeiraFruta);

//unshift - adiciona um valor ou mais no inicio do array
var novaFruta = "tomate"
frutas.unshift(novaFruta)
console.log(frutas)