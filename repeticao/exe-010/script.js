let num = document.querySelector('#txtn')
let res = document.querySelector('#res')
let btn = document.querySelector('.btn')

function impares() {
    if (num.value.length == 0) {
        alert('[Erro] Preencha o campo!')
    } else {
        let n = Number(num.value)

        if (num <= 0) {
            alert('O número tem que ser maior que ZERO.')
        } else {
            res.innerHTML = ''

            for (let i = 1; i <= n; i++) {
                if (i % 2 != 0) {
                    res.innerHTML += `${i} <br>`
                }
            }
        }
    }
}

btn.addEventListener('click', impares)