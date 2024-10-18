const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

/*
a) O código solicita que o usuário digite um número, converte a resposta de string para number.
Após verifica se o resto da divisão do número inserido por 2 é igual a 0.
Caso a verificação seja verdadeira, a string "Passou no teste." é impressa no console, do contrário a string "Não passou no teste." é impressa
b) Números pares
c) Números impares
*/