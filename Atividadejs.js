function changeQuestions(){
    
}


window.onload = function () {
    // var pergunta = document.getElementById("pergunta")
    // pergunta.innerHTML = ''
}
function nextQuestion() {

    var pergunta = document.getElementById("pergunta")
    var slot1 = document.getElementById("resposta1")
    var resposta2 = document.getElementById("resposta2")
    var slot3 = document.getElementById("resposta3")
    var options = document.getElementsByName('options')
    if(options[0].checked){
        if(options[0].value == perguntas[i].certa){
            points = points +1
        }
    }
    alert(points)
        options[0].value = perguntas[i].option1
        options[1].value = perguntas[i].option2
        options[2].value = perguntas[i].option3
        pergunta.innerHTML = perguntas[i].pergunta
        slot1.innerHTML = perguntas[i].option1
        resposta2.innerHTML = perguntas[i].option2
        slot3.innerHTML = perguntas[i].option3
        alert(perguntas[i].certa)
        i = i+1
}

function clicou() {
    var pergunta = document.getElementById("pergunta")
    var slot1 = document.getElementById("resposta1")
    var resposta2 = document.getElementById("resposta2")
    var slot3 = document.getElementById("resposta3")
    var options = document.getElementsByName('options')
    var footer1 = document.getElementById('footer1')
    var menu = document.getElementById('menu')
    var footer = document.getElementById('footer')
    options[0].value = perguntas[i].option1
        options[1].value = perguntas[i].option2
        options[2].value = perguntas[i].option3

    alert(options[0].value)
    pergunta.innerHTML = ""
    slot1.innerHTML = ""
    resposta2.innerHTML = ""
    slot3.innerHTML = ""
    pergunta.innerHTML = perguntas[0].pergunta
    slot1.innerHTML = perguntas[0].option1
    resposta2.innerHTML = perguntas[0].option2
    slot3.innerHTML = perguntas[0].option3
    footer1.hidden = false
    footer.hidden = false
    menu.hidden = true
    options[0].hidden = false
    options[1].hidden = false
    options[2].hidden = false

}
var i = 0
var points = 0
var perguntas = [
    {
        pergunta: "Qual o nome do pai do naruto?",
        option1: 'Minato',
        option2: "Kakashi",
        option3: "Nimato",
        certa: "Minato"
    }, {
        pergunta: 'Qual o nome da esposa do Naruto?',
        option1: 'Hinata',
        option2: 'Sakura',
        option3: 'Ino',
        certa: "Hinata"


    }, {
        pergunta: 'Qual o Jutso assinatura do Naruto',
        option1: 'Rasengan',
        option2: 'Chidori',
        option3: 'Oito portões',
        certa: "Rasengan"


    }
]
var pergunta = document.getElementById("pergunta")
pergunta.innerHTML = 'dale'
