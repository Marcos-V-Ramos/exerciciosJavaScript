/* Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos ,
bem como a soma dos elementos. */

const progAritmetica = (numTermo, a1, razao) => {

    for (let i = 0; i < numTermo; i++) {

        console.log(a1 + razao * i)
    }

    console.log('Soma dos termos: ' + (numTermo * (a1 + (a1 + ((numTermo - 1) * razao ))) ) / 2)
}

function progGeometrica (numTermo, a1, razao) {
     
    for(let i = 0; i < numTermo; i++) {

        console.log(a1 * (razao**i ))
    }
    console.log('Soma dos termos: ' + (a1 * ((razao**numTermo) - 1)) / (razao - 1))
}

progAritmetica(10, 10, 15)
console.log('-----')
progGeometrica(10, 2, 5)