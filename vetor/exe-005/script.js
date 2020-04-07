let num = document.querySelector('#txtn')
let res = document.querySelector('.res')
let btn = document.querySelector('.btn')

function maiorValor() {
    if (num.value.length == 0) {
        alert('[Erro] O campo não pode estar vazio!')
    } else {
        let n = Number(num.value)

        if (n <= 0) {
            alert('[Erro] O número não pode ser menor que ZERO!')
        } else {
            let arr = []
            let maiorValor
            let posicao

            for (let i = 0; i < n; i++) {
                let v = Number(prompt('Número: '))

                arr[i] = v
            }

            maiorValor = arr[0]

            for (let p in arr) {
                if (arr[p] > maiorValor) {
                    maiorValor = arr[p]

                    posicao = p
                }
            }

            res.innerHTML = `
                <p>Maior valor do vetor: ${maiorValor}</p>
                <p>Posição do maior valor: ${posicao}</p>
            `
        }
    }
}

btn.addEventListener('click', maiorValor)