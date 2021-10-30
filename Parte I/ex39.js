/* Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

const switchArrays = (vetorUm, vetorDois) => {

    if (vetorUm.length != vetorDois.length) {

        console.log("Vetores de tamanho diferente.")
    } else {

        for(let i = 0; i < vetorUm.length; i++){
            vetorUm[i] = vetorUm[i] + vetorDois[i]
            vetorDois[i] = vetorUm[i] - vetorDois[i]
            vetorUm[i] = vetorUm[i] - vetorDois[i]
        }

        console.log( {
            vetorUm,
            vetorDois
        })
    }
}

let a = [ 10, 20, 30 ]
let b = [ 83, 43, 22 ]
const c = [ 12, 12, 12, 12 ]

switchArrays(a, b)
switchArrays(a, c)
