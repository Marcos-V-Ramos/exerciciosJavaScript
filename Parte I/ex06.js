/*
    Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos."
*/

const jurosSimples = function(capInicial, taxJuros, tempoApcd) {
    let juros = capInicial * taxJuros * tempoApcd
    let montante = capInicial + juros

    return `R$${montante.toFixed(2)}`
}

console.log(jurosSimples(1400, 0.05, 6))
console.log(jurosSimples(50, 0.07, 8))
console.log(jurosSimples(749.77, 0.06, 8))

const jurosCompostos = function(capInicial, taxJuros, tempoApcd) {
    let montante = (capInicial, taxJuros, tempoApcd) => capInicial * (Math.pow(1 + taxJuros, tempoApcd)) // arrow function
    return `R$${montante(capInicial, taxJuros, tempoApcd).toFixed(2)}`
}

console.log(jurosCompostos(20000, 0.05, 4))
console.log(jurosCompostos(15000, 0.02, 4))
console.log(jurosCompostos(13863.21, 0.02, 4))
