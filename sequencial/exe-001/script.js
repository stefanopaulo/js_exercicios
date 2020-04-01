var btn = document.querySelector('#btn')

btn.addEventListener('click', calculaAreaPreco)

function calculaAreaPreco() {
    var lag = document.querySelector('#largura')
    var com = document.querySelector('#comprimento')
    var pre = document.querySelector('#preco')
    
    var l = Number(lag.value)
    var c = Number(com.value)
    var p = Number(pre.value)
    var area = document.querySelector('#area')
    var valor = document.querySelector('#valor')

    var a = l * c
    var v = a * p

    area.innerHTML = `Area do terreno: ${a.toFixed(2)}`
    valor.innerHTML = `Preço do terreno: ${v.toFixed(2)}`
}

