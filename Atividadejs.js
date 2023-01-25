function question(pergunta, certa, errada1, errada2){
    this.pergunta = pergunta
    this.certa = certa
    this.errada1 = errada1 
    this.errada2 = errada2
}
window.onload = function (){
    // var pergunta = document.getElementById("pergunta")
    // pergunta.innerHTML = ''
}
function clicou(ny){
    var pergunta = document.getElementById("pergunta")
    var slot1 = document.getElementById("resposta1")
    var resposta2 = document.getElementById("resposta2")
    var slot3 = document.getElementById("resposta3")
    pergunta.innerHTML = ""
    slot1.innerHTML = ""
    resposta2.innerHTML = ""
    slot3.innerHTML = ""
    pergunta.innerHTML = perguntas[ny].pergunta
    slot1.innerHTML = perguntas[ny].certa
    resposta2.innerHTML = perguntas[ny].errada1
    slot3.innerHTML = perguntas[ny].errada2

}
var count = 0



var perguntas = [
    {pergunta: "Qual o nome do pai do naruto?",
        certa:   'Minato',
        errada1: "Kakashi",
        errada2: "Nimato"
    },{pergunta: 'Qual o nome da esposa do Naruto?',
        certa: 'Hinata',
        errada1: 'Sakura',
        errada2: 'Ino',

    },{pergunta: 'Qual o Jutso assinatura do Naruto',
    certa: 'Rasengan',
    errada1: 'Chidori',
    errada2: 'Oito portões',

}
]
var pergunta = document.getElementById("pergunta")
    pergunta.innerHTML = 'dale'
