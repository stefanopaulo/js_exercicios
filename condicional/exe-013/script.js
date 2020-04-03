var btn = document.querySelector('.btn')

btn.addEventListener('click', function() {
    var eixox = document.querySelector('#eixox')
    var eixoy = document.querySelector('#eixoy')
    var res = document.querySelector('#res')

    var x = Number(eixox.value)
    var y = Number(eixoy.value)

    var quad = ''

    if (x > 0 && y > 0) {
        quad = 'Q1'
    } else if (x > 0 && y < 0) {
        quad = 'Q4'
    } else if (x < 0 && y < 0) {
        quad = 'Q3'
    } else if (x < 0 && y > 0) {
        quad = 'Q2'
    } else if ((x > 0 || x < 0) && y == 0){
        quad = 'Eixo X'
    } else if ((y > 0 || y < 0) && x == 0) {
        quad = 'Eixo Y'
    } else {
        quad = 'Origem'
    }

    res.innerHTML = quad

    eixox.value = ''
    eixoy.value = ''
})