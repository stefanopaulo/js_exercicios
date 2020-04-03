var btn = document.querySelector('.btn')

btn.addEventListener('click', function() {
    var temp = document.getElementsByName('temp')
    var txttemp = document.querySelector('#txttemp')
    var res = document.querySelector('#res')

    var t = Number(txttemp.value)

    var c, f

    if (temp[0].checked) {
        f = t / (5 / 9) + 32
        res.innerHTML = `Temperatura em Fahrenheit: ${f.toFixed(2)}°`
    } else if (temp[1].checked) {
        c = 5 / 9 * (t - 32)
        res.innerHTML = `Temperatura em Celsius: ${c.toFixed(2)}°`
    }
})