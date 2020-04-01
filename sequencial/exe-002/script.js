var btn = document.querySelector('#btn')

btn.addEventListener('click', function() {
    var base = document.querySelector('#base')
    var altura = document.querySelector('#altura')
    var area = document.querySelector('#area')
    var perimetro = document.querySelector('#perimetro')
    var diagonal = document.querySelector('#diagonal')

    var b = Number(base.value)
    var alt = Number(altura.value)
    
    var a = b * alt
    var p = (b + alt) * 2
    var d = Math.sqrt(b ** 2 + alt ** 2)

    area.innerHTML = `Area: ${a.toFixed(4)}`
    perimetro.innerHTML = `Perimetro: ${p.toFixed(4)}`
    diagonal.innerHTML = `Diagonal: ${d.toFixed(4)}`
})