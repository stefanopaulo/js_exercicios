const alturaTijolo = document.querySelector('#altt')
const larguraTijolo = document.querySelector('#lagt')
const alturaParede = document.querySelector('#altp')
const larguraParede = document.querySelector('#lagp')
const res = document.querySelector('#res')

function calcular() {
    if(alturaTijolo.value.length == 0 || larguraTijolo.value.length == 0 || alturaParede.value.length == 0 || larguraParede.value.length == 0) {
        alert('[Erro] Os campos não podem estar vazios!')
    } else {
        let at = Number(alturaTijolo.value)
        let lt = Number(larguraTijolo.value)
        let ap = Number(alturaParede.value)
        let lp = Number(larguraParede.value)

        let areaT = at * lt / 100
        let areaP = ap * lp

        let qtdTijolos = areaP * areaT

        res.innerHTML = `Quantidade de tijolos necessários ${Math.round(qtdTijolos)}`
    }
}