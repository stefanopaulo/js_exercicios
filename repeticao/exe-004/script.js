var idade = Number(prompt('Idade: '))

var somaI = 0
var cont = 0
var media

while (idade >= 0) {
    somaI += idade
    cont++
    idade = Number(prompt('Idade: '))
}

if (somaI == 0) {
    alert('Impossível calcular!')
} else {
    media = somaI / cont
    alert(`Média = ${media.toFixed(2)}`)
}