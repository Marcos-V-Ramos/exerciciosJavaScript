const mediaAritmetica = (vetorInteiros) => {
    let resultado = 0

    for(let i = 0; i < vetorInteiros.length; i++){
        resultado += vetorInteiros[i]
    }

    return resultado / vetorInteiros.length
}

const quatroBimestres = [8, 7, 6, 7]
console.log(mediaAritmetica(quatroBimestres))

console.log(mediaAritmetica([10, 10, 10, 10]))
console.log(mediaAritmetica([2, 3, 4, 5]))
console.log(mediaAritmetica([7, 6, 7, 6]))
