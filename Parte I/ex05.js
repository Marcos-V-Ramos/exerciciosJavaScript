
const moneyTransformer = (valor = 0) => {
    let transform = valor.toFixed(2)
    let final = String(transform).replace('.', ',')
    return `R$${final}`
}

console.log(moneyTransformer(0.30000000000000002))
console.log(moneyTransformer(4.87334349838))
console.log(moneyTransformer(12222.2))
console.log(moneyTransformer(10.05))