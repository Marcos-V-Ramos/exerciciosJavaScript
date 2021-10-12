// modo um:

const quantidadeNegativos = function(inteiros){
    let negativos = 0

    for(let i = 0; i < inteiros.length; i++){
        if(Math.sign(inteiros[i]) === -1){
            negativos++
        }
    }

    return negativos
}

// modo dois:

const negativeNumbers = function(inteiros) {
    
    let qtdNegativos = 0

    inteiros.forEach(num => {
        if (num < 0) {
            qtdNegativos++
        }
    })

    return qtdNegativos
}




const numbers = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
console.log(quantidadeNegativos(numbers), negativeNumbers(numbers))

const myNumbers = [10, 20, 30, 40, 50]
console.log(quantidadeNegativos(myNumbers), negativeNumbers(myNumbers))

const numbersOfMine = [10, -10, 20, -20, 30, -30]
console.log(quantidadeNegativos(numbersOfMine), negativeNumbers(numbersOfMine))

