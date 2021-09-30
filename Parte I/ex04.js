function dividir(dividendo, divisor){
    let result = dividendo / divisor
    return `Resultado: ${Math.trunc(result)}, resto: ${dividendo % divisor}`
}

console.log(dividir(25, 5))
console.log(dividir(25, 6))
console.log(dividir(64, 8))
console.log(dividir(88, 2))
console.log(dividir(22, 3))
