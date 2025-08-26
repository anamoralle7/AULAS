var aluno = {
    nome : "rodolfo",
    anoEscolar: "2°",
    turma: "C",
    notas: [6, 8, 7],
    estudar: function(){
        console.log("Estou estudando")
    },
    //metodo com funcao interna
    media : function(n1,n2,n3){
        return ( (n1+n2+n3) / 3 )
    },
    //metodo com funcao externa
    ocorrencias: listaDeocorrencias
    
}
//acessa as propriedades do obj aluno
console.log("o aluno ", aluno.nome, " esta no ", aluno.anoEscolar, "ano escolar.");
aluno.estudar()
//executta um método de dentro do obj
console.log("Média final:", aluno.media(aluno.notas[0], aluno.notas[1], aluno.notas[2]));
//cria funcao externa para ultilização do obj
function listaDeocorrencias(){
    console.log("Comeu na bliblioteca");
    console.log("Xingou no corredor da escola");
    console.log("Não fez o trabalho");
}