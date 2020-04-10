const pressao = document.querySelector('#pressao')
const vol = document.querySelector('#vol')
const temp = document.querySelector('#temp')
const btn = document.querySelector('#btn')
const res = document.querySelector('#res')

function calcularMassa() {
    if(pressao.value.length == 0 || vol.value.length == 0 || temp.value.length == 0) {
        alert('[Erro] Os campos não podem estar vazios!')
    } else {
        let p = Number(pressao.value)
        let v = Number(vol.value)
        let t = Number(temp.value)
        let massa
        res.innerHTML = ''

        if (p <= 0 || v <= 0 || t <= 0) {
            alert('[Erro] Os campos não podem ser menor que ZERO!')
        } else {
            massa = (p * v) / 0.37 / (t - 460)
        }

        res.innerHTML = `Massa de Ar: ${massa}`
    }
}

btn.addEventListener('click', calcularMassa)