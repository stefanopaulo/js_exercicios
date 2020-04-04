var n1 = Number(prompt('Primeira nota: '))

while (n1 < 0 || n1 > 10) {
    alert('Nota inválida! Digite novamente')
    n1 = Number(prompt('Primeira nota: '))
}

var n2 = Number(prompt('Segunda nota: '))

while (n2 < 0 || n2 > 10) {
    alert('Nota inválida! Digite novamente')
    n2 = Number(prompt('Segunda nota: '))
}

var media = (n1 + n2) / 2

alert(`Média = ${media.toFixed(2)}`)