const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const btn = document.querySelector('#btn')
const res = document.querySelector('.res')

function checksEmpty() {
    if(num1.value.length == 0 || num2.value.length == 0) {
        return true
    }
}

function checksHigher() {
    if(checksEmpty()) {
        alert('[Erro] Os campos não podem estar vazios!')
    } else {
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)

        res.innerHTML = ''

        if (n1 > n2) {
            res.innerHTML = `
                <p>Maior: ${n1}</p>
            `
        } else if (n2 > n1) {
            res.innerHTML = `
                <p>Maior: ${n2}</p>
            `
        } else {
            res.innerHTML = `
                <p>São iguais</p>
            `
        }
    }
}

btn.addEventListener('click', checksHigher)