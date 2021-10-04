const planoDeTrabalho = (plano, salario) => {

    switch (plano.toUpperCase()) {

        case 'A':
            return salario + (salario * 0.1)
        case 'B':
            return salario + (salario * 0.15)
        case 'C':
            return salario + (salario * 0.2)
        default:
            return "Este plano é inválido."

    }
}

console.log(planoDeTrabalho('A', 1800))
console.log(planoDeTrabalho('B', 1800.5))
console.log(planoDeTrabalho('C', 1800))
console.log(planoDeTrabalho('Z', 1800))

console.log(planoDeTrabalho('B', 2000.4))
console.log(planoDeTrabalho('C', 2000))
console.log(planoDeTrabalho('J', 1669.2))