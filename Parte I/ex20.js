/*
    Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
    
    Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve informar apenas a
    seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

const criarResultado = (qtdNotas100, qtdNotas50, qtdNotas10, qtdNotas5, qtdNotas1) => {
    let resultado = ''

    if (qtdNotas100 > 0) {
        resultado += `${qtdNotas100} nota(s) de R$100. `
    }

    if (qtdNotas50 > 0) {
        resultado += `${qtdNotas50} nota(s) de R$50. `
    }

    if (qtdNotas5 > 0) {
        resultado += `${qtdNotas5} nota(s) de R$5. `
    }

    if (qtdNotas10 > 0) {
        resultado += `${qtdNotas10} nota(s) de R$10. `
    }

    if (qtdNotas1 > 0) {
        resultado += `${qtdNotas1} nota(s) de R$1. `
    }

    return resultado
}

const calcValorNota = (valorSaque) => {

    if (valorSaque >= 100) {

        return 100
    } else if (valorSaque >= 50) {

        return 50
    } else if (valorSaque >= 10) {

        return 10
    } else if (valorSaque >= 5) {

        return 5
    } else if (valorSaque >= 1) {

        return 1
    }
}

const liberarCelulas = (valorSaque) => { // função principal

    let qtdNotas100 = 0
    let qtdNotas50 = 0
    let qtdNotas10 = 0
    let qtdNotas5 = 0
    let qtdNotas1 = 0

    let valorNota = calcValorNota(valorSaque)

    while (valorSaque >= valorNota) {
        
        switch (valorNota) {
            case 100:

                valorSaque -= 100
                qtdNotas100++
                break
            case 50:

                valorSaque -= 50
                qtdNotas50++
                break
            case 10:

                valorSaque -= 10
                qtdNotas10++
                break
            case 5:

                valorSaque -= 5
                qtdNotas5++
                break
            case 1:
                qtdNotas1++
                valorSaque -= 1
                break
        }

        valorNota = calcValorNota(valorSaque)

    }

    return criarResultado(qtdNotas100, qtdNotas50, qtdNotas10, qtdNotas5,qtdNotas1)
}

console.log(liberarCelulas(153))
console.log(liberarCelulas(250))
console.log(liberarCelulas(57))