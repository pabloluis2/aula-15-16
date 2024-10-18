function comprimentarAluno(turnoAluno){
    if(turnoAluno==="M"){
        console.log("Bom dia!")
    } else if(turnoAluno==="V"){
        console.log("Boa tarde!")
    } else if(turnoAluno==="N"){
        console.log("Boa Noite!")
    } else {
        console.log("Turno informado é inválido!")
    }
}

comprimentarAluno(prompt("Informe o turno que você está matriculado de acordo com a legenda a seguir:\nM (matutino)\nV (Vespertino)\nN (Noturno)").toUpperCase())