const retornarFatorial = (numero) => {
    let fatorial = 1

    for (let i = numero; i >= 1; i--) {
        fatorial = fatorial * i
    }

    return `O fatorial de ${numero} é igual a ${fatorial}.`
}

console.log(retornarFatorial(5))
console.log(retornarFatorial(6))