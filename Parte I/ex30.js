
function maiorMenor(inteiros){
    
    let maior = inteiros[0]
    let menor = inteiros[0]

    for (let i = 0; i < inteiros.length; i++) {
        
        if (inteiros[i] > maior) {
            maior = inteiros[i]
        } else if(inteiros[i] < menor){
            menor = inteiros[i]
        }
    }

    return {
        maiorInteiro: maior,
        menorInteiro: menor
    }
}

console.log(maiorMenor([10, 20, 30, 40, 50, 60, 70, 80, 90, 200]))
console.log(maiorMenor([-8, -90, 500, 653, 1233]))

const meusNumeros = maiorMenor([20, -111, 0, 800, 543, -432])
console.log(meusNumeros)