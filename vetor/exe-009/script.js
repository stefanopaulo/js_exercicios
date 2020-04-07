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
            let idades = []
            let nomes = []
            let maisVelho
            let pos

            res.innerHTML = ''

            for (let c = 0; c < n; c++) {
                alert(`Dados da ${c+1}° pessoa`)
                
                let n = prompt('Nome: ')
                nomes[c] = n

                let i = Number(prompt('Idade: '))
                idades[c] = i

            }

            maisVelho = idades[0]

            for (let p in idades) {
                if (idades[p] > maisVelho) {
                    maisVelho = idades[p]
                    pos = p
                }
            }

            res.innerHTML += `<p>Pessoa mais velha: ${nomes[pos]}</p>`
        }
    }
}

btn.addEventListener('click', gerarArray)