let num = document.querySelector('#txtn')
let res = document.querySelector('#res')
let btn = document.querySelector('.btn')

function cobaias() {
    if (num.value.length == 0) {
        alert('[Erro] O campo precisa estar preenchido!')
    } else {
        let n = Number(num.value)

        if (n <= 0) {
            alert('[Erro] O campo não pode ser menor que ZERO.')
        } else {
            let c = 0, r = 0, s = 0, soma = 0

            for (let i = 1; i <= n; i++) {
                let qtd = Number(prompt('Quantidade de cobaias: '))
                let tipo = prompt('Tipo de cobaia')

                switch (tipo) {
                    case 'c' :
                        c += qtd
                    break
                    case 'r' :
                        r += qtd
                    break
                    case 's' :
                        s += qtd
                    break
                }
                soma += qtd
            }
            
            let pc = c / (soma / 100)
            let ps = s / (soma / 100)
            let pr = r / (soma / 100)

            res.innerHTML = `
                <h2>RELATORIO FINAL</h2>
                <p>Total: ${soma}</p>
                <p>Coelhos: ${c}</p>
                <p>Ratos: ${r}</p>
                <p>Sapos: ${s}</p>
                <p>Percentual de coelhos: ${pc.toFixed(2)}%</p>
                <p>Percentual de ratos: ${pr.toFixed(2)}%</p>
                <p>Percentual de sapos: ${ps.toFixed(2)}%</p>
            `

        }
    }
}

btn.addEventListener('click', cobaias)