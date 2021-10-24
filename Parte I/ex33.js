let vetorInteiro = [18, 23, 13, 124]
let vetorString = ['Marcos', 'Vincius', 'Isabelle', 'Lima']
let vetorDouble = [3.1415, 6.666, -0.223, 12.010010001]

const concatenarVetores = function (...args) {
    resultado = []

    for(let i = 0; i < arguments.length; i++){

        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenarVetores(vetorInteiro, vetorDouble))
console.log(concatenarVetores(vetorDouble, vetorString))
console.log(concatenarVetores(vetorString, vetorDouble, vetorInteiro))