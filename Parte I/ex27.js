/* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida 
*/
const calcTempo = (alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior) => {
    
    let qtdAnos = 0

    while (alturaMenor < alturaMaior) {

        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }

    console.log(qtdAnos)
    return qtdAnos
}

const crescimentoAnual = (alturaUm, taxaUm, alturaDois, taxaDois) => { 

    if (alturaUm == alturaDois) {

        if (taxaUm > taxaDois) {

            return "A segunda criança será ultrapassada pela primeira criança em 1 ano."
        } else if (taxaUm < taxaDois) {

            return "A primeira criança será ultrapassada pela segunda criança em 1 ano."
        } else {

            return "As duas crianças têm o mesmo tamanho e crescimento."
        }
    } else {

        if (alturaUm > alturaDois) {

            if (taxaUm >= taxaDois) {

                return "A menor criança não irá ultrapassar a outra."
            } else {

                return calcTempo(alturaDois, taxaDois, alturaUm, taxaUm)
            }
        } else {

            if (taxaDois >= taxaUm) {

                return "A menor criança não irá ultrapassar a outra."
            } else {
                
                return calcTempo(alturaUm, taxaUm, alturaDois, taxaDois)
            }
        }
    }
}

console.log(crescimentoAnual(15, 2, 130, 4))
console.log(crescimentoAnual(130, 1, 140, 2))
console.log(crescimentoAnual(155, 3, 160, 5))
console.log(crescimentoAnual(165, 4, 150, 2))