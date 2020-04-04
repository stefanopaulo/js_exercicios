let num = document.querySelector('#txtn')
let res = document.querySelector('#res')
let btn = document.querySelector('.btn')

function parOuImpar() {
    if (num.value.length == 0) {
        alert('[Erro] O campo precisa estar preenchido!')
    } else {
        let n = Number(num.value)

        if (n <= 0) {
            alert('[Erro] O número precisa ser maior que ZERO.')
        } else {
            for (let i = 1; i <= n; i++) {
                let v = Number(prompt('Número: '))

                if (v > 0 && v % 2 == 0) {
                    alert('Par Positivo')
                } else if (v < 0 && v % 2 == 0) {
                    alert('Par Negativo')
                } else if (v > 0 && v % 2 != 0) {
                    alert('Impar Positivo')
                } else if(v < 0 && v % 2 != 0) {
                    alert('Impar Negativo')
                } else {
                    alert('Nulo')
                }
            }
        }
    }
}

btn.addEventListener('click', parOuImpar)