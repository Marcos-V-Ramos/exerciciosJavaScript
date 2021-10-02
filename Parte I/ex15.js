const comprarCarro = function(carro){
    switch(carro){
        case 'Sedan':
        case 'Motocicleta':
        case 'Caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        case 'Hatch':
            return 'Compra efetuada com sucesso.'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui.'
    }
}

console.log(comprarCarro('Fox'))
console.log(comprarCarro('Hatch'))

console.log(comprarCarro('Sedan'))
console.log(comprarCarro('Motocicleta'))
console.log(comprarCarro('Caminhonete'))
