let num = document.querySelector('#txtn')
let btn = document.querySelector('.btn')
let d = document.querySelector('#dentro')
let f = document.querySelector('#fora')

function contar() {
    if (num.value.length == 0) {
        alert('[Erro] O campo precisa ser preenchido!')
    } else {
        let n = Number(num.value)

        let dentro = 0
        let fora = 0

        if (n <= 0) {
            alert('[Erro] O número precisa ser maior que ZERO.')
        } else {
            for (let i = 1; i <= n; i++) {
                let v = Number(prompt('Número: '))

                if (v >= 10 && v <= 20) {
                    dentro++
                } else {
                    fora++
                }
            }

            d.innerHTML = `Dentro: ${dentro}`
            f.innerHTML = `Fora: ${fora}`
        }
    }
}

btn.addEventListener('click', contar)