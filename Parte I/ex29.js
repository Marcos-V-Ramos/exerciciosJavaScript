/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/

function intervalo (vetor) {
    let inInterval = 0
    let outInterval = 0
    let interval = []

    for(let i = 10; i <= 20; i++){
        interval.push(i)
    }

    for(let i = 0; i < vetor.length; i++) {

        if(interval.includes(vetor[i])){

            inInterval++
        } else {
            
            outInterval++
        }
    }

    return {
        inInterval,
        outInterval
    }
}

console.log(intervalo([10, 40, 11, 50, 18, 66, 19]))