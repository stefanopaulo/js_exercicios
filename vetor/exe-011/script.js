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
            let alturas = []
            let generos = []
            let maiorA
            let menorA
            let somaAF = 0
            let mediaAF
            let numH = 0, numF = 0

            res.innerHTML = ''

            for (let i = 0; i < n; i++) {
                alert(`Dados da ${i+1}° pessoa`)

                let a = Number(prompt('Altura: '))
                alturas[i] = a

                let g = prompt('Genêro: ')
                generos[i] = g
            }

            maiorA = alturas[0]
            menorA = alturas[0]

            for (let p in alturas) {
                if (alturas[p] > maiorA) {
                    maiorA = alturas[p]
                }

                if (alturas[p] < menorA) {
                    menorA = alturas[p]
                }
            }

            for (let p in generos) {
                if (generos[p] == 'f') {
                    somaAF += alturas[p]
                    numF++
                }

                if (generos[p] == 'm') {
                    numH++
                }
            }

            mediaAF = somaAF / numF

            res.innerHTML = `
                <p>Maior Altura: ${maiorA.toFixed(2)}</p>
                <p>Menor Altura: ${menorA.toFixed(2)}</p>
                <p>Média da altura das mulheres: ${mediaAF.toFixed(2)}</p>
                <p>Número de homens: ${numH}</p>
            `
        }
    }
}

btn.addEventListener('click', gerarArray)