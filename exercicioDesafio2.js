function realizaCompra(nomeCompleto,tipoJogo,etapaJogo,categoriaIngresso,qtdIngressos){
    /*
    indice matriz preço:
    Array Pai
    0 = SF
    1 = DT
    2 = FI
    Array filho
    0 = Categoria 1
    1 = Categoria 2
    2 = Categoria 3
    3 = Categoria 4
    */
    let matrizPreco = [[1320,880,550,220],[660,440,330,170],[1980,1320,880,330]]
    let precoUnitario, tipoJogoExtenso
    if(categoriaIngresso<0 || categoriaIngresso>4){
        console.log("Categoria de jogo informado é inválido")
        return false
    }
    switch(etapaJogo){
        case "SF":
            precoUnitario = matrizPreco[0][categoriaIngresso-1]
            tipoJogoExtenso = "Semi-final"
            break
        case "DT":
            precoUnitario = matrizPreco[1][categoriaIngresso-1]
            tipoJogoExtenso = "Decisão terceiro lugar"
            break
        case "FI":
            precoUnitario = matrizPreco[2][categoriaIngresso-1]
            tipoJogoExtenso = "Final"
            break
        default:
            console.log("Etapa de jogo informado é inválido!")
            return false
            break
    }
    if(tipoJogo === "DO"){
        console.log(
            `---Dados da compra---`,
            `\nNome do cliente:  ${nomeCompleto}`,
            `\nTipo do jogo:  Nacional`,
            `\nEtapa do jogo:  ${tipoJogoExtenso}`,
            `\nCategoria:  ${categoriaIngresso}`,
            `\nQuantidade de Ingressos:  ${qtdIngressos} ingressos`,
            `\n---Valores---`,
            `\nValor do ingresso:  R$ ${precoUnitario}`,
            `\nValor total:  R$ ${precoUnitario*qtdIngressos}`
        )
        return true
    }else if(tipoJogo === "IN"){
        console.log(
            `\n---Dados da compra---`,
            `\nNome do cliente:  ${nomeCompleto}`,
            `\nTipo do jogo:  Internacional`,
            `\nEtapa do jogo:  ${tipoJogoExtenso}`,
            `\nCategoria:  ${categoriaIngresso}`,
            `\nQuantidade de Ingressos:  ${qtdIngressos} ingressos`,
            `\n---Valores---`,
            `\nValor do ingresso:  U$ ${precoUnitario/4.1}`,
            `\nValor total:  U$ ${(precoUnitario*qtdIngressos)/4.1}`
        )
        return true
    } else {
        "Tipo de jogo informado é inválido!"
        return false
    }
}

let nomeCompletoInput = prompt("Informe seu nome completo:")
let tipoJogoInput = prompt("Informe o tipo de jogo que gostaria de adquirir de acordo com a legenda a seguir:\nIN (Internacional)\nDO (Doméstico)").toUpperCase()
let etapaJogoInput = prompt("Informe a etapa do jogo que gostaria de adquirir de acordo com a legenda a seguir:\nSF (Semi-final)\nDT (Decisão de terceiro lugar)\nFI (Final)").toUpperCase()
let categoriaIngressoInput = Number(prompt("Informe a categoria do ingresso que gostaria de adquirir de 1 a 4"))
let qtdIngressosInput = Number(prompt("Informe quantos ingressos gostaria de adquirir:"))

realizaCompra(nomeCompletoInput,tipoJogoInput,etapaJogoInput,categoriaIngressoInput,qtdIngressosInput)