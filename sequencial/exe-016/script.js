const largura = document.querySelector('#largura')
const altura = document.querySelector('#altura')
const btn= document.querySelector('#btn')
const res = document.querySelector('#res')

function calcular() {
    if(largura.value.length == 0 || altura.value.length == 0) {
        alert('[Erro] Os campos não podem estar vazios!')
    } else {
        let l = Number(largura.value)
        let a = Number(altura.value)
        let area, latas, qtdMl

        if (l <= 0 || a <= 0) {
            alert('[Erro] Os valores precisam ser maior que ZERO!')
        } else {
            area = l * a
            qtdMl = area * 300
            latas = qtdMl / 2000
        }

        res.innerHTML = `Serão necessárias ${Math.round(latas)} latas de tinta para pintar a parede.`
    }
}

btn.addEventListener('click', calcular)