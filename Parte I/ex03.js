const elevateNumber = (base, exp) => {
    let result = 1

    for(let i = 1; i <= exp; i++){
        result *= base
    }

    return result
}

console.log(elevateNumber(5, 3))
console.log(elevateNumber(2, 8))
console.log(elevateNumber(8, 2))
console.log(elevateNumber(2, 3))
console.log(elevateNumber(7, 7) == 7 * 7 * 7 * 7 * 7 * 7 * 7)
