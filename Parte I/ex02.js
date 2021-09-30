const defTriangle = (l1, l2, l3) => {
    let definition = ''

    if(l1 == l2 && l2 == l3){
        definition = 'Equilátero'
    } else if(l1 == l2 || l1 == l3 || l3 == l2){
        definition = 'Isósceles'
    } else {
        definition = 'Escaleno'
    }

    return definition
}

console.log(defTriangle(3, 3, 3))
console.log(defTriangle(4, 4, 2))
console.log(defTriangle(4, 5, 6))
console.log(defTriangle(4, 5, 6))
