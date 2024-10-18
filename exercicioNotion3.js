const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

/*
a)A primeira linha inicia uma variável, solicita ao usuário a inserção de um número
e converte o input para Number antes de armazenar a informação na variável
b)Se o usuário digitar 10, a mensagem impressa no terminal seria:
Esse número passou no teste
Undefined
Se o usuário digitar -10, a mensagem impressa no terminal seria:
Undefined
c)Nenhuma mensagem de erro impressa no console, apenas a informação Undefined será impressa como resultado do último console.log
pois a variável mensagem não foi declarada no escopo global, não tendo nenhum valor atribuído a ela.
*/