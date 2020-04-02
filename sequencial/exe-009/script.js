var btn = document.querySelector('#btn')

btn.addEventListener('click', function() {
    var va = document.querySelector('#va')
    var vb = document.querySelector('#vb')
    var vc = document.querySelector('#vc')
    var qud = document.querySelector('#qud')
    var tri = document.querySelector('#tri')
    var tra = document.querySelector('#tra')

    var a = Number(va.value)
    var b = Number(vb.value)
    var c = Number(vc.value)

    var quadrado = a * a
    var triangulo = a * b / 2
    var trapezio = (a + b) * c / 2

    qud.innerHTML = `Area do Quadrado = ${quadrado.toFixed(4)}`
    tri.innerHTML = `Area do Triangulo = ${triangulo.toFixed(4)}`
    tra.innerHTML = `Area do Trapezio = ${trapezio.toFixed(4)}`
})