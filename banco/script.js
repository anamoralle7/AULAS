//introdução
console.log("Bem vindo ao Banco")
alert("Bem vindo ao Banco ")

//senha
 var senha = 0
var senhaCorreta = "8181"

while(senha != senhaCorreta) {
    var senha = prompt("Digite sua senha: ");
 }
 alert("Senha correta! Acesso concedido")
 console.log("Senha correta! Acesso concedido.");

 //operações
var saldo = 0
alert("Seu saldo é: R$" + saldo, )

function depósito(){
     var valorDeposito = parseFloat(prompt("Digite o valor do depósito:"));
    saldo = saldo + valorDeposito;
    alert("Depósito realizado, Saldo Atual de: R$" + saldo);
    console.log("Depósito realizado, Saldo Atual de: R$" + saldo);
    replay()
}
function saque(){
    var valorSaque = parseFloat(prompt("Digite o valor do saque:"));
    if (valorSaque <= saldo) {
      saldo = saldo - valorSaque;
        alert("Saque realizado, Saldo Atual de: R$" + saldo);
        console.log("Saque realizado, Saldo Atual de: R$" + saldo);
    } else {
        alert("Saldo insuficiente para saque.");
        console.log("Saldo insuficiente para saque.");
        
    }
  replay()
}


var operacao = prompt("Escolha uma operação 1. Depósito 2.Saque 3.Sair")
if (operacao === "1") {
   depósito()
}
else if (operacao === "2") {
    saque()
    }
    if (operacao === "3") {
        alert("Obrigado!")
    }


    function replay (){
        prompt("Deseja realizar outra operação? 1. Sim 2. Não")
 if (operacao === "1") {
replay2()
    }

else if (operacao === "2") {
alert("Obrigado !")
}


}
    function replay2(){
var operacao = prompt("Qual operação?  1. Depósito 2.Saque 3.Sair")
if (operacao === "1") {
   depósito()
}
else if (operacao === "2") {
    saque()
    }
    if (operacao === "3") {
        alert("Obrigado !")
    }
    }


