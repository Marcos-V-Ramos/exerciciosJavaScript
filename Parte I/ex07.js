/*
 Elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal 
 modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para
 cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta
 é negativo”.'
*/

function quadraticFunction (ax2, bx, c) {
    const discriminante = (ax2, bx, c) => Math.pow(bx, 2) - 4 * ax2 * c
    const positivoX = () => (-bx + Math.sqrt(discriminante(ax2, bx, c))) / 2 * ax2
    const negativoX = () => (-bx - Math.sqrt(discriminante(ax2, bx, c))) / 2 * ax2
    const resultados = [positivoX(), negativoX()]

    if (discriminante(ax2, bx, c) < 0) {
        return 'Delta é negativo!'
    } else {
        return resultados
    }
 
}

console.log(quadraticFunction(1, -2, -3))
console.log(quadraticFunction(1, -10, 25))
console.log(quadraticFunction(2, -1, 1))
console.log(quadraticFunction(1, -1, -6))
