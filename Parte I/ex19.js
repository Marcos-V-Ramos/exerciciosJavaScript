function lanchonete(codigo /* código do lanche */, qtd){

    switch(codigo){

        case 100:
            return `RS ${(3 * qtd).toFixed(2)}`
        case 200:
            return `RS ${(4 * qtd).toFixed(2)}`
        case 300:
            return `RS ${(5.50 * qtd).toFixed(2)}`
        case 400:
            return `RS ${(7.50 * qtd).toFixed(2)}`
        case 500:
            return `RS ${(3.50 * qtd).toFixed(2)}`
        case 600:
            return `RS ${(2.80 * qtd).toFixed(2)}`
        default:
            return `Produto de código ${codigo} inexistente.`

    }

}

console.log(lanchonete(600, 3)) // Suco
console.log(lanchonete(500, 5)) // Refrigerante
console.log(lanchonete(400, 2)) // Bauru
console.log(lanchonete(300, 1)) // Cheeseburguer
console.log(lanchonete(200, 1)) // Hambúrger Simples
console.log(lanchonete(100, 10)) // Cachorro Quente
console.log(lanchonete(900, 8)) // ??