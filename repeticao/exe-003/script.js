var x = Number(prompt('Eixo X: '))
var y = Number(prompt('Eixo Y: '))

while (x != 0 && y != 0) {
    if (x > 0 && y > 0) {
        alert('Quadrante: Q1')
    } else if (x > 0 && y < 0) {
        alert('Quadrante: Q4')
    } else if (x < 0 && y < 0) {
        alert('Quadrante: Q3')
    } else {
        alert('Quadrante: Q2')
    }

    x = Number(prompt('Eixo X: '))
    y = Number(prompt('Eixo Y: '))
}