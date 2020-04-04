let num = document.querySelector('#txtn')
let btn = document.querySelector('.btn')
let res = document.querySelector('#res')

function media() {
    if (num.value.length == 0) {
        alert('[Erro] O campo não pode estar vazio')
    } else {
        let n = Number(num.value)

        if (n <= 0) {
            alert('[Erro] Considerando um caso')
            n = 1
        }

        for (let i = 1; i <= n; i++) {
            let n1 = Number(prompt('Nota 1: '))
            let n2 = Number(prompt('Nota 2: '))
            let n3 = Number(prompt('Nota 3: '))

            let m = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10
            
            alert(`Media: ${m.toFixed(2)}`)

            res.innerHTML += `Media ${i}: ${m.toFixed(2)} <br>`
        }
    }
}

btn.addEventListener('click', media)