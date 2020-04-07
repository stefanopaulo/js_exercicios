let num = document.querySelector('#txtn')
let res = document.querySelector('.res')
let btn = document.querySelector('.btn')

function gerarArray() {
    if (num.value.length == 0) {
        alert('[Erro] O campo não pode estar vazio!')
    } else {
        let n = Number(num.value)

        if (n <= 0) {
            alert('[Erro] O número precisa ser maior que ZERO!')
        } else {
            let arr = []
            let somaP = 0, contP = 0
            let mediaP

            res.innerHTML = ''

            for (let i = 0; i < n; i++) {
                let v = Number(prompt('Número: '))

                arr[i] = v
            }

            for (let p in arr) {
                if (arr[p] % 2 == 0) {
                    somaP += arr[p]

                    contP++
                }
            }

            if (somaP == 0) {
                res.innerHTML += '<p>Nenhum número PAR a ser exibido.</p>'
            } else {
                mediaP = somaP / contP

                res.innerHTML += `<p>Média entre os pares = ${mediaP.toFixed(2)}</p>`
            }
        }
    }
}

btn.addEventListener('click', gerarArray)