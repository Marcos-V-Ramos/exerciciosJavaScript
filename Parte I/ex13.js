let ehDiaUtil = dia => {
    switch (dia) {
        case 1:
            return "É fim de semana."
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "É dia útil."
        case 7:
            return "É fim de semana."
        default:
            return "Este dia é inválido."
    }
}

console.log(ehDiaUtil(1))
console.log(ehDiaUtil(88))
console.log(ehDiaUtil(2))
console.log(ehDiaUtil(4))
console.log(ehDiaUtil(6))
