/*
 Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que
 o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e
 uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

const classificarNotas = (n1, n2, n3) => {
    let notas = [n1, n2, n3]
    let maiorNota = notas[0]
    let notasMenores = []

    for (let i = 0; i < notas.length; i++) {
        if (maiorNota < notas[i]){
            maiorNota = notas[i]
        } else {
            notasMenores.push(notas[i])
        }
    }

    return {
        maiorNota,
        notasMenores
    }
} 

const studentTest = (cod, n1, n2, n3) => {
    
    const notasClassificadas = classificarNotas(n1, n2, n3)
    let maiorNota = notasClassificadas.maiorNota
    let menorNota = notasClassificadas.notasMenores
    let mediaPond = (maiorNota * 4 + menorNota[0] * 3 + menorNota[1] * 3) / (4 + 3 + 3)

    return {
        status: mediaPond >= 5 ? "Aprovado" : "Reprovado",
        cod,
        maiorNota,
        segundaNota: menorNota[0],
        terceiraNota: menorNota[1]
    }
    
}

console.log(studentTest(123, 3.8, 6, 5.5))
console.log(studentTest(132, 4.4, 5.5, 3.7))
console.log(studentTest(342, 8.8, 9.6, 9.3))
console.log(studentTest(123, 2.8, 6, 3.5))
console.log(studentTest(656, 10, 9, 5.6))