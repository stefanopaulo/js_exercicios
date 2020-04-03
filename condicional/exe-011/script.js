var btn = document.querySelector('.btn')

btn.addEventListener('click', function() {
    var sal = document.querySelector('#sal')
    var novosal = document.querySelector('#novosal')
    var aumento = document.querySelector('#aumento')
    var porc = document.querySelector('#porc')

    var s = Number(sal.value)
    var a, p, ns

    if (s <= 1000) {
        a = s * 0.2
        p = 20
    } else if (s <= 3000) {
        a = s * 0.15
        p = 15
    } else if (s <= 8000) {
        a = s * 0.10
        p = 10
    } else {
        a = s * 0.05
        p = 5
    }

    ns = s + a

    novosal.innerHTML = `Novo salário R$ ${ns.toFixed(2)}`
    aumento.innerHTML = `Aumento R$ ${a.toFixed(2)}`
    porc.innerHTML = `Porcentagem ${p}%`

    sal.value = ''
})