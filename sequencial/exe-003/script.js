var btn = document.querySelector('#btn')

btn.addEventListener('click', function() {
    var preco = document.querySelector('#preco')
    var qtd = document.querySelector('#qtd')
    var din = document.querySelector('#din')
    var troco = document.querySelector('#troco')

    var p = Number(preco.value)
    var q = Number(qtd.value)
    var d = Number(din.value)

    var v = p * q
    var t = d - v

    troco.innerHTML = `Troco R$: ${t.toFixed(2)}`
})