function frutas(fruta){
    switch(fruta){
        case 'Maçã':
            return 'Não vendemos esta fruta aqui.'
        case 'Kiwi':
            return 'Estamos com escassez de kiwis.'
        case 'Melancia':
            return 'Aqui está, são três reais o quilo.'
        default:
            return 'Esta fruta não foi encontrada no nosso sistema.'
    }
}
console.log(frutas('Melancia'))
console.log(frutas('Chocolate'))
console.log(frutas('Maçã'))
console.log(frutas('Kiwi'))