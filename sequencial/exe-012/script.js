const raio = document.querySelector('#raio')
const btn = document.querySelector('#btn')
const res = document.querySelector('#res')

function area() {
    if(raio.value.length == 0) {
        alert('[Erro] O campo não pode estar vazio!');
    } else {
        let r = Number(raio.value)

        let area = Math.PI * Math.pow(r, 2)

        res.innerHTML = `Área da circuferência: ${area.toFixed(2)}`
    }
}

btn.addEventListener('click', area)