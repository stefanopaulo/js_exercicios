const precoCompra = document.querySelector('#precoc')
const precoVenda = document.querySelector('#precov')
const frete = document.querySelector('#frete')
const despesas = document.querySelector('#despesas')
const res = document.querySelector('#res')

function calcular() {
    if(precoCompra.value.length == 0 || precoVenda.value.length == 0 || frete.value.length == 0 || despesas.value.length == 0) {
        alert('[Erro] Os campos não podem estar vazios!')
    } else {
        let pc = Number(precoCompra.value)
        let pv = Number(precoVenda.value)
        let f = Number(frete.value)
        let d = Number(despesas.value)
        let totc, lucro, porclucro

        if(pc <= 0 || pv <= 0 || f <= 0 || d <= 0) {
            alert('[Erro] Os valores devem ser maiores que ZERO!')
        } else if (pv < (pc + f + d)) {
            alert('[Erro] O preço de venda está menor que o preço de compra, corrija para prosseguir!')
        } else {
            totc = pc + f + d
            lucro = pv - totc
            porclucro = lucro / (totc / 100)
    
            res.innerHTML = `
                <p>Lucro: ${lucro}</p>
                <p>Porcentagem de Lucro: ${porclucro.toFixed(2)}%</p>
            `
        }

    }
}