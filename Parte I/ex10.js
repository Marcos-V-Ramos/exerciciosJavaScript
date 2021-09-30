
const divisivelTres = inteiro => {
    let numeroToString = String(inteiro)
    let arrayAlgarismos = numeroToString.split('')
    let somaAlgarismos = 0

    for (let i = 0; i < arrayAlgarismos.length; i++) {
        somaAlgarismos = somaAlgarismos + Number(arrayAlgarismos[i])
    }
    // um número é divisível por 3 caso a soma de seus algarismos seja um múltiplo de 3.

    return somaAlgarismos % 3 === 0
}

let minhaIdade = 19
console.log(divisivelTres(minhaIdade))
console.log(divisivelTres(21))
console.log(divisivelTres(25))
console.log(divisivelTres(11398))
console.log(divisivelTres(12111111111))