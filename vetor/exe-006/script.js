let num = document.querySelector('#txtn')
let btn = document.querySelector('.btn')
let res = document.querySelector('.res')

function somaVetor() {
    if (num.value.length == 0) {
        alert('[Erro] O campo não pode estar vazio!')
    } else {
        let n = Number(num.value)

        if (n <= 0) {
            alert('[Erro] O número precisa ser maior que ZERO!')
        } else {
            let vetA = []
            let vetB = []
            let vetC = []

            res.innerHTML = ''

            alert('Digite o valores do vetor A')

            for (let i = 0; i < n; i++) {
                let v = Number(prompt(`A${i}: `))

                vetA[i] = v
            }

            alert('Digite o valores do vetor B')

            for (let i = 0; i < n; i++) {
                let v = Number(prompt(`A${i}: `))

                vetB[i] = v
            }

            for (let i = 0; i < n; i++) {
                vetC[i] = vetA[i] + vetB[i]
            }

            res.innerHTML += '<p>Vetor Resultante</p>'

            for (let p in vetC) {
                res.innerHTML += `
                <p>${vetC[p]}</p>
            `
            }
        }
    }
}

btn.addEventListener('click', somaVetor)