let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/*
a) O código solicita ao usuário o nome de uma fruta e armazena a informação na variável fruta, após a variável preco é iniciada sem um valor atribuído.
Em seguida um switch atribui o valor a variável preco a depender do valor informado pelo usuário
b)2.25
c)A mensagem impressa no console seria: "O preço da fruta Pêra é R$ 5" pois sem o break,
o código seguiria sendo executado, entrando no case default e alterando o valor da variável preco para 5.
*/