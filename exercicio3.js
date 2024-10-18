function comparaNumeros(num1, num2){
    if(num1 > num2){
        return "O primeiro número é maior que o segundo número"
    }else if(num1 < num2){
        return "O primeiro número é menor que o segundo número"
    }else{
        return "O primeiro número é igual ao segundo número"
    }
}

console.log(comparaNumeros(Number(prompt("Insira um número para comparação:")),Number(prompt("Insira outro número para comparação:"))))