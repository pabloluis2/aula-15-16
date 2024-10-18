function podeDirigir(idade){
    if(idade>=18){
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
    }
}

let idadeInput = Number(prompt("Informe sua idade:"))

podeDirigir(idadeInput)