var btn = document.querySelector('.btn')

btn.addEventListener('click', function() {
    var num1 = document.querySelector('#num1')
    var num2 = document.querySelector('#num2')
    var txtmut = document.querySelector('#txtmut')

    var n1 = Number(num1.value)
    var n2 = Number(num2.value)

    var aux

    if (n1 < n2) {
        aux = n1
        n1 = n2
        n2 = aux
    }

    if (n1 % n2 == 0) {
        txtmut.innerHTML = `São multiplos`
    } else {
        txtmut.innerHTML = `Não são multiplos`
    }

    num1.value = ''
    num2.value = ''
})