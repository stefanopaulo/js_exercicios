let num = document.querySelector('#txtn')
let btn = document.querySelector('.btn')
let res = document.querySelector('#res')

function divisao() {
    if (num.value.length == 0) {
        alert('[Erro] O campo precisa estar preenchido!')
    } else {
        let n = Number(num.value)

        if (n <= 0) {
            alert('[Erro] O número precisa ser maior ou igual a 1. Conseiderando 1')
            n = 1
        }

        for (let i = 1; i <= n; i++) {
            let num = Number(prompt('Numerador: '))
            let den = Number(prompt('Denominador: '))

            let d

            if (den == 0) {
                alert('Divisão Impossivel')
            } else {
                d = num / den
                
                alert(`Divisão: ${d.toFixed(2)}`)
            }


            res.innerHTML += `${i}: ${d} <br>`
        }
    }
}

btn.addEventListener('click', divisao)