function comparaNumeros(num1, num2){
    if(num1 === num2){
        return "Os números são iguais!"
    }else{
        return "Os números são diferentes!"
    }
}

console.log(comparaNumeros(Number(prompt("Insira um número para comparação:")),Number(prompt("Insira outro número para comparação:"))))