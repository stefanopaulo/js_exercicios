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
            let soma = 0
            let media = 0

            res.innerHTML = ''

            for (let i = 0; i < n; i++) {
                let v = Number(prompt('Número: '))

                arr[i] = v
            }

            for (let p in arr) {
                soma += arr[p]
            }

            media = soma / arr.length

            res.innerHTML += `
                <p>Elementos = [${arr}]</p>
                <p>Soma = ${soma.toFixed(2)}</p>
                <p>Média = ${media.toFixed(2)}</p>
            `
        }
    }
}

btn.addEventListener('click', gerarArray)