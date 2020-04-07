let num = document.querySelector('#txtn')
let btn = document.querySelector('.btn')
let res = document.querySelector('.res')

function abaixoMedia() {
    if (num.value.length == 0) {
        alert('[Erro] O campo não pode estar vazio!')
    } else {
        let n = Number(num.value)
        
        if (n <= 0) {
            alert('[Erro] O número precisa ser maior que ZERO!')
        } else {
            let arr = []
            let soma = 0
            let media
    
            res.innerHTML = ``
    
            for (let i = 0; i < n; i++) {
                let v = Number(prompt('Número: '))
    
                arr[i] = v
            }
    
            for (let p in arr) {
                soma += arr[p]
            }
    
            media = soma / arr.length
    
            res.innerHTML += `
                <p>Média do vetor: ${media}</p>
                <p>Elementos abaixo da média</p>
            `
            for (let p in arr) {
                if (arr[p] < media) {
                    res.innerHTML += `<p>${arr[p]}</p>`
                }
            }
        }
    }
}

btn.addEventListener('click', abaixoMedia)