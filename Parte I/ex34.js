const compareStrings = (stringOne, stringTwo) => {

    let contains = true;

    for (let i = 0; i < stringOne.length; i++) {

        let caractereAtualStringOne = stringOne.charAt(i).toLowerCase()

        for(let j = 0; j < stringTwo.length; j++){

            let caractereAtualStringTwo = stringTwo.charAt(j).toLowerCase()

            if(caractereAtualStringOne == caractereAtualStringTwo) {
                contains = true
                break
            } else {
                contains = false
            }
        }

        if(!contains) {
            return contains
        }
    }
    return contains
}

console.log(compareStrings('xx', 'xx'))