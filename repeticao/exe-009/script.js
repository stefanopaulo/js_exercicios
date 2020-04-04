let num1 = document.querySelector('#txtn1')
let num2 = document.querySelector('#txtn2')
let btn = document.querySelector('.btn')
let res = document.querySelector('#res')

function somaImpares() {
    let somaI = 0

    if (num1.value.length == 0 || num2.value.length == 0) {
        alert('[Erro] Não pode deixar os campos em branco')
    } else {
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)

        if (n1 == n2) {
            res.innerHTML = 'Não há soma'
        } else {
            if (n1 > n2) {
                let aux = n1
                n1 = n2
                n2 = aux
            }

            for (let i = n1; i < n2; i++) {
                if (i % 2 != 0) {
                    somaI += i
                }
            }
        }
    }

    res.innerHTML = `Soma dos impares = ${somaI}`
    num1.value = ''
    num2.value = ''
}

btn.addEventListener('click', somaImpares)