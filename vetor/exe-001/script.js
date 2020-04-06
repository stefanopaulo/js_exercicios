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
            
            for (let i = 1; i <= n; i++) {
                let v = Number(prompt('Digite um número: '))

                arr[i] = v
            }

            res.innerHTML = ''

            for (let pos in arr) {
                if (arr[pos] < 0) {
                    res.innerHTML += `<p>${arr[pos]}</p>`
                }
            }
        }
    }
}

btn.addEventListener('click', gerarArray)