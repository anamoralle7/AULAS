console.log("oi")

// com array

var alunos = ["pedro","tiago", "joão"]
var media = [7,8,6]

console.log("O aluno: ", alunos[0], "teve media:", media[2])

// COM OBJETOS
var estudante = {
    "nome" : "cristiano",
    nota1 : 8,
    nota2 : 9,
    media : 8.5
}

console.log(estudante.nome);
console.log(estudante.media);
console.log(estudante.nota1);
console.log(estudante.nota2);


// objeto iscolaa

var objeto = {
     nome : "caneta",
     funcao : escrever ,
     tamanho : media,
    cor : azul,
    preço : 1,5
console.log(objeto.cor)
}


// criando obj
 var garrafa = {}
    console.log(garrafa);

    //adic novas propriedades
    // em um obj ja exi
    garrafa.preco = 450
    garrafa.cor = "rosa"
    garrafa.tamanho = 3.5
    garrafa["validade"] = "1 anos"

    console.log(garrafa)

    //alterando o valor de uma propri
    // q ja exis
    garrafa.preco = 499.99
    garrafa["validade"] = "2 anos"
      console.log(garrafa);

      // criar uma nova propri
      var novaPropriedade = "apelido"
    garrafa[novaPropriedade] = "rafa"
    console.log(garrafa.apelido);



// criar funçoes
var animal = {
    // variaveis = propriedades
    nome: "labubu",
    especie: "bobbie goodies",
    raca: "morango do amor",
    //funcao - método
    andar: function(){
        console.log("estou andando")
    },
    latir: function(){
        console.log("labubu labubu labubu")
    }
}



console.log("o nome é: ", animal.nome)

animal.andar()
animal.latir()


