function imparOuPar(inteiros){
    let impar = 0
    let par = 0

    for(let i = 0; i < inteiros.length; i++){
        if(inteiros[i] % 2 == 0){
            par++
        } else if(inteiros[i] % 2 != 0){
            impar++
        }
    }

    return {
        qtdPares: par,
        qtdIpares: impar
    }
}

const myNumbers = [10, 13, 20, 23, 30, 33, 40, 43, 50, 53]
console.log(imparOuPar(myNumbers))
console.log(imparOuPar([23, 13, 10, 20]))