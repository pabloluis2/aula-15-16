function comprimentarAluno(turnoAluno){
    switch(turnoAluno){
        case "M":
            console.log("Bom dia!")
            break
        case "V":
            console.log("Boa tarde!")
            break
        case "N":
            console.log("Boa noite!")
            break
        default:
            console.log("Turno informado é inválido!")
            break
    }

}

comprimentarAluno(prompt("Informe o turno que você está matriculado de acordo com a legenda a seguir:\nM (matutino)\nV (Vespertino)\nN (Noturno)").toUpperCase())