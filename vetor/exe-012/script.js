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
            let nomeP = []
            let precoC = []
            let precoV = []
            let lucros = []
            let menor10 = 0, entre10e20 = 0, maior20 = 0, valorC = 0, valorV = 0, lucroT = 0

            res.innerHTML = ''

            for (let i = 0; i < n; i++) {
                alert(`Dados do ${i+1}° produto`)

                let n = prompt('Nome: ')
                nomeP[i] = n

                let pc = Number(prompt('Preço de compra: '))
                precoC[i] = pc

                let pv = Number(prompt('Preço de venda: '))
                precoV[i] = pv
            }

            for (let i = 0; i < n; i++) {
                lucros[i] = precoV[i] - precoC[i]
            }

            for (let p in precoC) {
                valorC += precoC[p]
            }

            for (let p in precoV) {
                valorV += precoV[p]
            }

            for (let p in lucros) {
                lucroT += lucros[p]
            }

            for (let p in lucros) {
                if (lucros[p] / (precoC[p] / 100) < 10) {
                    menor10++
                } else if (lucros[p] / (precoC[p] / 100) <= 20) {
                    entre10e20++
                } else {
                    maior20++
                }
            }

            res.innerHTML = `
                <p>RELATÓRIO</p>
                <p>Lucro abaixo de 10%: ${menor10}</p>
                <p>Lucro entre 10% e 20%: ${entre10e20}</p>
                <p>Lucro maior que 20%: ${maior20}</p>
                <p>Valor total de compra: ${valorC.toFixed(2)}</p>
                <p>Valor total de venda: ${valorV.toFixed(2)}</p>
                <p>Lucro total: ${lucroT.toFixed(2)}</p>
            `
        }
    }
}

btn.addEventListener('click', gerarArray)