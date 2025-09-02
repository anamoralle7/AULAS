function quemMeChamou(individuo){
    console.log(individuo);
    console.log("class:", individuo.class);
    console.log("id:", individuo.id);
    console.log("Name:",individuo.name)
     console.log("valor:",individuo.value)
}

//elementoQueChamou = parte do html que invocou a funcao
function trocatexto(elementoQueChamou){
    //mostra o texto do html que chamou a funcao
    //console.log(elementoQueChamou);

    //cria uma variavel pra guardar quem ele achar com aquele id
    let textoAntigo = document.getElementById
    ("textoPraTrocar")

    //usa o innehtml pra substituir o que tava dentro do textoantigo, pro valor que esta na caixinha do elemento que chamou a funcao
    textoAntigo.innerHTML = elementoQueChamou.value
}

function troca(elementoQueChamou){
    let antigo = document.getElementById("textoOutro")
    antigo.innerHTML = elementoQueChamou.value
}