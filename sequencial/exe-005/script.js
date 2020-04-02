var btn = document.querySelector('#btn')

btn.addEventListener('click', function() {
    var idade1 = document.querySelector('#idade1')
    var idade2 = document.querySelector('#idade2')
    var nome1 = document.querySelector('#nome1').value
    var nome2 = document.querySelector('#nome2').value

    var i1 = Number(idade1.value)
    var i2 = Number(idade2.value)

    var media = (i1 + i2) / 2

    var res = document.querySelector('#media')

    res.innerHTML = `A média de idade entre ${nome1} e ${nome2} é de ${media} anos.`
})