/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando 
que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos de 10 anos pagam R$80; 2) 
conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

const planoDeSaude = function(idade) {

    if (idade < 10) {
        return `RS ${(100 + 80).toFixed(2)}`
    } else if (idade < 30) {
        return `RS ${(100 + 50).toFixed(2)}`
    } else if (idade < 60) {
        return `RS ${(100 + 95).toFixed(2)}`
    } else {
        return `RS ${(100 + 130).toFixed(2)}`
    }
}

console.log(planoDeSaude(8))
console.log(planoDeSaude(25))
console.log(planoDeSaude(38))
console.log(planoDeSaude(88))
console.log(planoDeSaude(10))