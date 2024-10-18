function amigoVaiAssistirQ(generoFilme = "", valorIngresso){
    if(generoFilme.toLowerCase() && valorIngresso <=15){
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :(")
    }
}

let generoFilmeInput = prompt("Qual gênero de filme você gostaria de assistir?")
let valorIngressoInput = Number(prompt("Qual o valor dos ingressos do filme escolhido?"))

amigoVaiAssistirQ(generoFilmeInput,valorIngressoInput)