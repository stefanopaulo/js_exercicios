function troco() {
    var valoruni = document.querySelector('#valoruni')
    var qtd = document.querySelector('#qtd')
    var rec = document.querySelector('#rec')
    var res = document.querySelector('.res')

    var v = Number(valoruni.value)
    var q = Number(qtd.value)
    var r = Number(rec.value)

    var precoP = v * q
    var troco

    if (r < precoP) {
        res.innerHTML = `<p style="color: #f00">DINHEIRO INSUFICIENTE! FALTAM R$ ${Math.abs(precoP - r)}.</p>`
    } else {
        troco = r - precoP
        res.innerHTML = `<p>TROCO = R$ ${troco.toFixed(2)}</p>`
    }

    valoruni.value = ''
    qtd.value = ''
    rec.value = ''
}