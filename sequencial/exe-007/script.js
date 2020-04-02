var btn = document.querySelector('#btn')

btn.addEventListener('click', function() {
    var nome = document.querySelector('#nome').value
    var valorH = document.querySelector('#valorH')
    var horasT = document.querySelector('#horasT')
    var pag = document.querySelector('#pag')

    var v = Number(valorH.value)
    var h = Number(horasT.value)
    var p = v * h

    pag.innerHTML = `O valor a ser pago para ${nome} é de R$ ${p.toFixed(2).replace('.', ',')}`
})