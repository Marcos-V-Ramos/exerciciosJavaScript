
function anoBissexto (ano) {
   
    if (ano <= 0) {
        console.log(`O ano ${ano} não é bissexto!`)
    } else if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        console.log(`O ano ${ano} é bissexto!`)
    } else {
        console.log(`O ano ${ano} não é bissexto!`)
    }
}

anoBissexto(2021)
anoBissexto(2013)
anoBissexto(2002)
anoBissexto(1998)

anoBissexto(2000)
anoBissexto(2008)
anoBissexto(2048)
anoBissexto(2052)