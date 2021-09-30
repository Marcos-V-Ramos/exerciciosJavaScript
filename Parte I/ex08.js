/*
    ​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).Obs.: O primeiro jogo não conta como novo recorde do melhor.

    Exemplo:
    String: “10 20 20 8 25 3 0 30 1”
    Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
    aconteceu no sétimo jogo.)`
*/

function basquetePontos (pontuacao) {
    let pontuacaoArray = pontuacao.split(' ')
    let pontuacaoInt = pontuacaoArray.map(pontos => Number(pontos))
    let qtdBatidas = 0
    let melhorJogada = pontuacaoInt[0]
    let piorJogada = pontuacaoInt[0]

    for (let i = 1; i <= pontuacaoInt.length; i++) {
        if (pontuacaoInt[i] > melhorJogada) {
            melhorJogada = pontuacaoInt[i]
            qtdBatidas++
        }
    }

    for (let i = 0; i <= pontuacaoInt.length; i++) {
        if (pontuacaoInt[i] < piorJogada) {
            piorJogada = pontuacaoInt[i]
        }
    }

    return [qtdBatidas, pontuacaoInt.indexOf(piorJogada) + 1]
}

console.log(basquetePontos("10 20 20 8 25 3 0 30 1"))
console.log(basquetePontos("10 20 30 40 50 60 70 80 1 99"))