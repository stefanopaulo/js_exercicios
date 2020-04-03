function isAprovado() {
    var nota1 = document.querySelector('#nota1')
    var nota2 = document.querySelector('#nota2')
    var res = document.querySelector('.res')

    var n1 = Number(nota1.value)
    var n2 = Number(nota2.value)

    var somaN = n1 + n2

    res.innerHTML = `<p>Nota final = ${somaN}</p>`

    if (somaN < 60) {
        res.innerHTML += `<p>REPROVADO</p>`
    }
}