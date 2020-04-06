let num = document.querySelector('#txtn')
let btn = document.querySelector('.btn')
let res = document.querySelector('.res')

function gerarArray() {
    if (num.value.length == 0) {
        alert('[Erro] O campo não pode estar vazio!')
    } else {
        let n = Number(num.value)

        if (n <= 0) {
            alert('[Erro] O número precisa ser maior que ZERO!')
        } else {
            let arr = []
            let arrPares = []

            res.innerHTML = ''

            for (let i = 0; i < n; i++) {
                let v = Number(prompt('Número: '))

                arr[i] = v
            }

            for (let p in arr) {
                if (arr[p] % 2 == 0) {
                    arrPares[p] = arr[p]
                }
            }

            res.innerHTML += `
                <p>Números pares</p>
                <p>${arrPares}</p>
                <p>Quantidade de pares: ${arrPares.length}</p>
            `
        }
    }
}

btn.addEventListener('click', gerarArray)