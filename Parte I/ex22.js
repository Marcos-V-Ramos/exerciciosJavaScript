/*
 Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como parâmetro
 um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A anuidade deve
 ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o
 valor a ser pago para o respectivo mês escolhido.
*/

function calcularAnuidade (mes, valor) {

    let atraso = 0
    
    if (mes > 0 && mes < 13) {

        atraso = mes - 1
        return 'R$ ' + (valor * (Math.pow(1 + (5/100) , atraso))).toFixed(2) /* 5/100 = 5% */
    } else {

        return "Mês fora do intervalo!"
    }

}

console.log(calcularAnuidade(-90, 222))
console.log(calcularAnuidade(65, 122))

console.log(calcularAnuidade(4, 100))
console.log(calcularAnuidade(1, 840))
console.log(calcularAnuidade(9, 1200))
console.log(calcularAnuidade(5, 980.55))
console.log(calcularAnuidade(3, 300))