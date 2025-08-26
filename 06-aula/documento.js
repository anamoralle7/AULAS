// obj window = janela do navgador

// console.log(window.alert("oi"));
// window.prompt("Me diz um nome")

// obj ducument = código html do site

console.log(document);
console.log(document.head);
console.log(document.body);

// acessando elementos do html
// por tag, class e id

// busca elementos pela mesma tag
var titulos =  document.getElementsByTagName("h1")

console.log(titulos)

// busca elementos pela mesma class
var paragrafos = document.getElementsByClassName("para")

console.log(paragrafos)

// busca elementos pelo ID
var achado = document.getElementsByClassName("p3")

console.log(achado)

//modificando elemento da lista de achados pela tag
titulos[1].style.color = "red"
titulos[2].style.backgroundColor = "red"

//modificando elemento achado pela class
paragrafos[0].style.fontSize = "45px"
paragrafos[0].style.fontWeught = "bold"

//modificando elemento achado pelo ID

//trocando o texto do elemento
achado.innerText = "tauba"

//trocando o html do elemento
achado.innerHTML = "<h2> novo texto </h2>"

// criar uma funcao

function cliquei(){
    console.log("parabens voce gosta de bobbie good")
    console.log("só que voce vai ter q comer morango do amor")
}