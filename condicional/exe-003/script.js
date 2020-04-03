function menorValor() {
    var valor1 = document.querySelector('#valor1')
    var valor2 = document.querySelector('#valor2')
    var valor3 = document.querySelector('#valor3')
    var txtmenor = document.querySelector('#txtmenor')

    var menor

    var v1 = Number(valor1.value)
    var v2 = Number(valor2.value)
    var v3 = Number(valor3.value)

    if (v1 < v2 && v1 < v3) {
        menor = v1
    } else if (v2 < v3) {
        menor = v2
    } else {
        menor = v3
    }

    txtmenor.innerHTML = `O menor valor digitado foi: ${menor}`
    valor1.value = ''
    valor2.value = ''
    valor3.value = ''
}