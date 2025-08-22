// arrays pra guardar as informações
var alunos = []
var notasA = []
var notasB = []

// Guardar as informaões vindas do usuario 
function cadastro(){
    for(var i = 0; i < 3; i++){
        alunos[i] = (prompt("Digite o nome dos alunos: "))
        notasA[i] = (Number("Digite a primeira nota:") )
        notasB[i] = (Number("Digite a primeira nota:") )

    }
}
// calcular media
function media(nota1, nota2){
    let mediaCalculada = (nota1 * 0.4) + (nota2 * 0.6)
    return mediaCalculada
}

// aprovado media  >= 7, recupeção < 7 e >= 5, reprovado media < 5
function situacao(mediaFinal){
    if(mediaFinal >= 7){
        return "Aprovado"

    }else if(mediaFinal < 7 && mediaFinal >= 5){
        return "Em recuperação"

    }
    else{
        return "reprovado"

    }

}

// Funcão que mostra os resultados
function mostraResultados(){
    for(var index in alunos){
     let notaPri = notasA[index] // pega a primeira nota e guarda, vinda do array notasA
    let notaSeg = notasB[index]// pega a segunda nota e guarda, vinda do array notasB
    let mediaAtual = media(notaPri, notaSeg)// manda as notas para funcao de media
    let status = situacao(mediaAtual)//Descobre a situação de acordo com a media
    console.log("o aluno:", alunos[index], "teve média de:", mediaAtual);
    console.log("o status dele é de:", status);

  }
}
cadastro()
mostraResultados()
