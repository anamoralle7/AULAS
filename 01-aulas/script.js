//comentario de 1 linha

/*
comenta
varias
linhas
*/

//console.log = escreva do portugol
console.log("mensagem top")

//cria uma janela de alerta na página
// alert("testa ai")

//Var cria uma variavel na tela
var nome = "ana"
console.log("o nome é:" + nome)


//cadeia = string
var texto = "mengoo"
console.log (typeof(texto) )

//inteiro = namber, int
var numero = 2090
console.log (typeof(numero) )

//inteiro = namber, float
var quebrado = 2.9
console.log (typeof(quebrado) )

// lógico = bool
var VouF = true
console.log (typeof(VouF) )

//valo nulo
var nulo = null
console.log (typeof(nulo) )

//variavel sem valor inicido
var indefinido = undefined
console.log (typeof(indefinido) )


//operadores aritimeticos
// +,-,*,/,&

var a = 10
var b = 3


var soma = a + b;           
console.log("a soma é:" + soma)

var subtracao = a - b;
console.log("a subtracao é:" + subtracao)

var multiplicacao = a * b;
console.log("a multiplicacao é:" + multiplicacao)

var divisao = a / b;
console.log("a divisao é:" + divisao)

var resto = a % b;
console.log("o resto é:" + resto)

//operadores lógicos
//e, ou,nao
// &&, ||, not

var verdade = true
var mentira = false

//comparacao com E
console.log(verdade && mentira)

//comparacao com OU
console.log(verdade || mentira)

//comparacao com negacao
console.log(verdade && !mentira)

//operadores relacionais
//>,<,>=,<=,==,!=,===,!==

var v1 = 7
var v2 =  15
var v3 = "7"

console.log(v1 > v2);
console.log(v1 < v2);
console.log(v1 >= v2);
console.log(v1 <= v2);
console.log(v1 == v2);
console.log(v1 != v2);


console.log(v1 == v2) //compara só valor
console.log(v1 === v2) // compara valor e tipo
console.log(v1 !== v2) // compara valor e tipo

//interacao com o usuario via comando promt
var numero =  prompt("Digite um número")
var numero2 =  prompt("Digite outro número")

var resultado = Number(numero) + Number(numero2)

console.log("o resultado é;", resultado)

alert("O resultado é:" + resultado)