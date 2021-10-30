/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A */

function conceitoNotas(notas){

    let conceitos = []

    for(let i = 0; i < notas.length; i++){

        if(notas[i] >= 0.0 && notas[i] < 4.9){
            conceitos.push('D')
        } else if(notas[i] >= 5.0 && notas[i] <= 6.9){
            conceitos.push('C')
        } else if(notas[i] >= 7.0 && notas[i] <= 8.9){
            conceitos.push('B')
        } else if(notas[i] >= 9.0 && notas[i] <= 10.0){
            conceitos.push('A')
        } else{
            conceitos.push('?')
        }
    }
    return conceitos
}

const notas = [ 0.3, 6.6, 7.6, 9.5, -1 ]
console.log(conceitoNotas(notas))