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
            let nome = []
            let idade = []
            let altura = []
            let arr16 = 0
            let somaA = 0
            let mediaA = 0
            let menor16 = 0

            res.innerHTML = ''

            for (let i = 0; i < n; i++) {
                let n = prompt('Nome: ')
                let i = Number(prompt('Idade: '))
                let a = Number(prompt('Altura: '))

                nome[i] = n
                idade[i] = i
                altura[i] = a
            }

            for (let p in altura) {
                somaA += altura[p] 
            }

            for (let p in idade) {
                if(idade[p] < 16) arr16++
            }

            mediaA = somaA / n

            menor16 = arr16 / (n / 100)

            res.innerHTML += `
                <p>Altura média = ${mediaA.toFixed(2)}</p>
                <p>Pessoas menores de 16 anos: ${menor16}%</p>
            `
            for (let p in idade) {
                if (idade[p] < 16) {
                    res.innerHTML += `
                    <p>${nome[p]}</p>
                    `
                }
            }
        }
    }
}

btn.addEventListener('click', gerarArray)