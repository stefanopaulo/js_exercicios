const nota2 = document.querySelector('#nota2')
const nota5 = document.querySelector('#nota5')
const nota10 = document.querySelector('#nota10')
const nota20 = document.querySelector('#nota20')
const nota50 = document.querySelector('#nota50')
const nota100 = document.querySelector('#nota100')
const res = document.querySelector('#res')

function contar() {
    if(nota2.value.length == 0 || nota5.value.length == 0 || nota10.value.length == 0 || nota20.value.length == 0 || nota50.value.length == 0 || nota100.value.length == 0) {
        alert('[Erro] Os campos não podem estar vazios!')
    } else {
        let n2 = Number(nota2.value)
        let n5 = Number(nota5.value)
        let n10 = Number(nota10.value)
        let n20 = Number(nota20.value)
        let n50 = Number(nota50.value)
        let n100 = Number(nota100.value)

        let soma = (n2 * 2) + (n5 * 5) + (n10 * 10) + (n20 * 20) + (n50 * 50) + (n100 * 100)

        res.innerHTML = `Total R$ ${soma}`
    }
}