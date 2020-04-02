var btn = document.querySelector('#btn')

btn.addEventListener('click', function() {
    var distancia = document.querySelector('#distancia')
    var comb = document.querySelector('#comb')
    var consumo = document.querySelector('#consumo')

    var d = Number(distancia.value)
    var c = Number(comb.value)
    var media = d / c

    consumo.innerHTML = `Consumo médio = ${media.toFixed(3)}`
})