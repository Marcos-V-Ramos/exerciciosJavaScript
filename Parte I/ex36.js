/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. 
Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado 
como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.
*/

function justDoSomeMath(numericArray, oneInteger){
    let finalArray = []
    
    numericArray.forEach(number => {
        finalArray.push(number * oneInteger)
    })

    return finalArray
}

function justDoSomeMathAgain(numericArray, oneInteger){
    let finalArray = []

    const myFunction = (number => {
        if (number > 5) {
            finalArray.push(number * oneInteger)
        }
    })
    numericArray.forEach(myFunction)

    return finalArray
}


console.log(justDoSomeMath([5, 10, 15, 20, 25, 30, 35], -2))
console.log(justDoSomeMathAgain([5, 2, 3, 20, 25, 30, 35], -2))