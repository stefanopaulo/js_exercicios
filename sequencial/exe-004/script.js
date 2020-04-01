var btn = document.querySelector('#btn')

btn.addEventListener('click', function() {
    var raio = document.querySelector('#raio')
    var area = document.querySelector('#area')

    var r = Number(raio.value)

    var a = Math.PI * Math.pow(r, 2)

    area.innerHTML = `Area do circulo: ${a.toFixed(3)}`
})