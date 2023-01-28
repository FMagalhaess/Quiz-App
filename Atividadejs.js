function rightAnsewr() {
    if (options[0].checked) {
        if (options[0].value == perguntas[i].certa) {
            points++
            alert(points)
        } else if (options[1].checked) {
            if (options[1].value == perguntas[i].certa) {
                points++
                alert(points)
            }
        } else if (options[2].checked) {
            if (options[2].value == perguntas[i].certa) {
                points = points + 1
                alert(points)
            }
        }
    }
}
function whichChecked(){
    
    var options = document.getElementsByName('options')
    for(var idx = 0; idx <3; idx++){
        if(options[idx].checked){
            checkBoxEmpty = false
            if (options[idx].value == perguntas[i].certa) {
                points++
                alert(points)
            }
            break
        } 
    }
}
window.onload = function () {
    footer1.hidden = true
}

function changeQuestions() {
    var pergunta = document.getElementById("pergunta")
    var slot1 = document.getElementById("resposta1")
    var resposta2 = document.getElementById("resposta2")
    var slot3 = document.getElementById("resposta3")
    var options = document.getElementsByName('options')
    var footer1 = document.getElementById('footer1')
    var menu = document.getElementById('menu')
    var footer = document.getElementById('footer')
    if (!changeHidden) {
        footer1.hidden = false
        menu.hidden = true
        options[0].hidden = false
        options[1].hidden = false
        options[2].hidden = false
        options[0].value = perguntas[i].option1
        options[1].value = perguntas[i].option2
        options[2].value = perguntas[i].option3
        pergunta.innerHTML = perguntas[i].pergunta
        slot1.innerHTML = perguntas[i].option1
        resposta2.innerHTML = perguntas[i].option2
        slot3.innerHTML = perguntas[i].option3
        changeHidden = true
        const element = document.querySelectorAll('.opt')
        element[0].style.opacity = '1'
        element[1].style.opacity = '1'
        element[2].style.opacity = '1'
        const foot = document.querySelector("#footer1")
        foot.style.opacity = '1'

    } else {
        whichChecked()
    if(!checkBoxEmpty){
        i++
        pergunta.innerHTML = perguntas[i].pergunta
        slot1.innerHTML = perguntas[i].option1
        resposta2.innerHTML = perguntas[i].option2
        slot3.innerHTML = perguntas[i].option3
        options[0].value = perguntas[i].option1
        options[1].value = perguntas[i].option2
        options[2].value = perguntas[i].option3
        options[0].checked = false
        options[1].checked = false
        options[2].checked = false
        checkBoxEmpty = true
    } else{
        alert(`Marque uma opcão`)
    }

    }
}
var changeHidden = false
var i = 0
var points = 0
var checkBoxEmpty = true

var perguntas = [
    {
        pergunta: "Qual o nome do pai do naruto?",
        option1: 'Minato',
        option2: "Kakashi",
        option3: "Nimato",
        certa: "Minato"
    }, {
        pergunta: 'Qual o nome da esposa do Naruto?',
        option1: 'Sakura',
        option2: 'Ino',
        option3: 'Hinata',
        certa: "Hinata"


    }, {
        pergunta: 'Qual o Jutso assinatura do Naruto',
        option1: 'Chidori',
        option2: 'Rasengan',
        option3: 'Oito portões',
        certa: "Rasengan"


    }
]
var pergunta = document.getElementById("pergunta")
pergunta.innerHTML = 'dale'
