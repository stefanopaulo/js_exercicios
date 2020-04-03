var btn = document.querySelector('.btn')

btn.addEventListener('click', function() {
    var horaini = document.querySelector('#horaini')
    var horafim = document.querySelector('#horafim')
    var res = document.querySelector('#res')

    var hi = Number(horaini.value)
    var hf = Number(horafim.value)
    var dur

    if (hf <= hi) {
        dur = hf - hi + 24
    } else {
        dur = hf - hi
    }

    res.innerHTML = `Duração do jogo: ${dur} horas.`

    horaini.value = ''
    horafim.value = ''
})