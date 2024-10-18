function identificaTipoPokemon(nomePokemon = ""){
    switch(nomePokemon.toLowerCase()){
        case "bulbasauro":
            return "Planta e Veneno"
            break
        case "charmander":
            return "Fogo"
            break
        case "squirtle":
            return "Água"
            break
        default:
            return "Pokemon não identificado."
            break
    }
}

console.log(identificaTipoPokemon(prompt("Escolha um pokemon inicial da primeira geração:")))