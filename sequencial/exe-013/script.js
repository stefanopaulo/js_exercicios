const nome = document.querySelector('#nome')
const idade = document.querySelector('#idade')
const btn = document.querySelector('#btn')
const res = document.querySelector('#res')

function calculaIdadeEmDias() {
    if(nome.value.length == 0 || idade.value.length == 0) {
        alert('[Erro] Os campos não podem estar vazios!')
    } else {
        let i = Number(idade.value)

        let dias = i * 365

        res.innerHTML = `${nome.value}, você viveu aproximadamente ${dias} dias.`
    }
}

btn.addEventListener('click', calculaIdadeEmDias)