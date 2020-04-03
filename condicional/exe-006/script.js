function medir() {
    var glicose = document.querySelector('#glicose')
    var txtmed = document.querySelector('#txtmed')

    var g = Number(glicose.value)

    var status = ''

    if (g <= 100) {
        status = 'Normal'
    } else if (g <= 140) {
        status = 'Elevado'
    } else {
        status = 'Diabetes'
    }

    txtmed.innerHTML = `Classificação: ${status}`

    glicose.value = ''
}