var btn = document.querySelector('.btn')

btn.addEventListener('click', function() {
    var cod = document.querySelector('#cod')
    var qtd = document.querySelector('#qtd')
    var valor = document.querySelector('#valor')

    var c = Number(cod.value)
    var q = Number(qtd.value)
    var v

    switch (c) {
        case 1:
            v = q * 5
        break
        
        case 2:
            v = q * 3.5
        break

        case 3:
            v = q * 4.8
        break

        case 4:
            v = q * 8.9
        break

        case 5:
            v = q * 7.32
        break

        default:
            valor.style.color = '#f00'
            valor.innerHTML = `DIGITE UM CÓDIGO VÁLIDO`
        break
    }

    valor.innerHTML = `Valor a pagar: R$ ${v.toFixed(2)}`
    valor.style.color = '#000'
})