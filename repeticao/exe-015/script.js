let num = document.querySelector('#txtn')
let btn = document.querySelector('.btn')
let res = document.querySelector('#res')

function fatorial() {
    if (num.value.length == 0) {
        alert('[Erro] O campo não pode estar vazio!')
    } else {
        let n = Number(num.value)

        if (n <= 0) {
            alert('[Erro] Considerando o Fatorial de 1!')
            n = 1
        }

        let fat = 1

        for (let i = 1; i <= n; i++) {
            fat *= i
        }

        res.innerHTML = `${n}! = ${fat}`
    }
}

btn.addEventListener('click', fatorial)