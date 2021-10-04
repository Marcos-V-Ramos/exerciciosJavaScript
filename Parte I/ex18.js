
const numeroPorExtenso = numero => {
    
    switch (numero) {
        case 0:
            return 'zero'
        case 1:
            return 'um'
        case 2:
            return 'dois'
        case 3:
            return 'três'
        case 4:
            return 'quatro'
        case 5:
            return 'cinco'
        case 6:
            return 'seis'
        case 7:
            return 'sete'
        case 8:
            return 'oito'
        case 9:
            return 'nove'
        case 10:
            return 'dez'
        default:
            return 'Número fora do intervalo.'
    }

}

console.log(numeroPorExtenso(47293))
console.log(numeroPorExtenso(0))
console.log(numeroPorExtenso(1))
console.log(numeroPorExtenso(2))
console.log(numeroPorExtenso(3))
console.log(numeroPorExtenso(4))
console.log(numeroPorExtenso(5))
console.log(numeroPorExtenso(6))
console.log(numeroPorExtenso(7))
console.log(numeroPorExtenso(8))
console.log(numeroPorExtenso(9))
console.log(numeroPorExtenso(10))
console.log(numeroPorExtenso(-1222))