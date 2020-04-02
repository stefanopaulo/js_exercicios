var btn = document.querySelector('#btn')

btn.addEventListener('click', function() {
    var valor1 = document.querySelector('#valor1')
    var valor2 = document.querySelector('#valor2')
    var soma = document.querySelector('#soma')

    var v1 = Number(valor1.value)
    var v2 = Number(valor2.value)
    var s = v1 + v2

    soma.innerHTML = `Soma = ${s}`
})