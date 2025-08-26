var carro = {
    marca : "Volkswagen",
    ano : "1980",
    modelo : "gol"
}
    console.log(carro.marca)
    console.log(carro.modelo)
    console.log(carro.ano)

console.log(carro.marca);
carro.ano = 2025
var novaPropriedade = "cor"
carro(novaPropriedade) = "rosa"


var pessoa = {
    nome : "ana top",
    idade : 30,
    apresentar : function(){
        console.log("meu nome é", pessoa.nome, "e tenho", pessoa.idade, "anos");
    }
}
pessoa.apresentar()
