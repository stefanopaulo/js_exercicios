const temp = document.querySelector('#temp')
const btn = document.querySelector('#btn')
const res = document.querySelector('#res')

function converterTemp() {
    if(temp.value.length == 0) {
        alert('[Erro] O campo não pode estar vazio!')
    } else {
        let t = Number(temp.value)

        let celsius = (5 / 9) * (t - 32)

        res.innerHTML = `Temperatura em Celsius: ${celsius.toFixed(4)}°`
    }
}

btn.addEventListener('click', converterTemp)