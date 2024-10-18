function podeSeMatricular(idade,concluiuEnsMedQ,cursandoOutraFaculQ){
    if(idade>=18 && concluiuEnsMedQ && !cursandoOutraFaculQ){
        return "Pode se matricular"
    } else {
        return "Não pode se matricular"
    }
}

console.log(
    podeSeMatricular(
        Number(prompt("Qual é sua idade?")),
        prompt("Você concluiu o ensino médio? Y/N").toUpperCase()==="Y",
        prompt("Você está matriculado em outra faculdade? Y/N").toUpperCase()==="Y")
)