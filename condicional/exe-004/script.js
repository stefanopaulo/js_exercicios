function minutos() {
    var min = document.querySelector('#min')
    var txtvalor = document.querySelector('#txtvalor')

    var m = Number(min.value)
    var valorP

    if (m <= 100) {
        valorP = 50;
    } else {
        valorP = (m - 100) * 2 + 50
    }

    txtvalor.innerHTML = `Valor a pagar R$ ${valorP.toFixed(2)}`
    min.value = ''
}