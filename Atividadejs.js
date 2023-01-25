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
function nextQuestion(){
var options = document.getElementsByName('options')
alert (options[0].checked)
alert(options[0].value)
options[0].value = 'asda'
alert(options[0].value)
}

function clicou(){
    var pergunta = document.getElementById("pergunta")
    var slot1 = document.getElementById("resposta1")
    var resposta2 = document.getElementById("resposta2")
    var slot3 = document.getElementById("resposta3")
    var options = document.getElementsByName('options')
    var footer1 = document.getElementById('footer1')
    var menu = document.getElementById('menu')
    var footer = document.getElementById('footer')

    pergunta.innerHTML = ""
    slot1.innerHTML = ""
    resposta2.innerHTML = ""
    slot3.innerHTML = ""
    pergunta.value = perguntas[0].pergunta
    slot1.setAttribute('value', 'asda')
    resposta2.value = perguntas[0].errada1
    slot3.value = perguntas[0].errada2
    pergunta.innerHTML = perguntas[0].pergunta
    slot1.innerHTML = perguntas[0].certa
    resposta2.innerHTML = perguntas[0].errada1
    slot3.innerHTML = perguntas[0].errada2
    footer1.hidden = false
    footer.hidden = false
    menu.hidden = true
    options[0].hidden = false
    options[1].hidden = false
    options[2].hidden = false

}



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
