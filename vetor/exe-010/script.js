let num = document.querySelector('#txtn')
let res = document.querySelector('.res')
let btn = document.querySelector('.btn')

function gerarArray() {
    if (num.value.length == 0) {
        alert('[Erro] O campo não pode estar vazio!')
    } else {
        let n = Number(num.value)

        if (n <= 0) {
            alert('[Erro] O número precisa ser maior que ZERO!')
        } else {
            let alunos = []
            let nota01 = []
            let nota02 = []
            let medias = []

            res.innerHTML = ''

            for (let i = 0; i < n; i++) {
                alert(`Dados do ${i+1}° aluno`)

                let n = prompt('Nome: ')
                alunos[i] = n

                let n1 = Number(prompt('Primeira Nota: '))
                nota01[i] = n1

                let n2 = Number(prompt('Segunda Nota: '))
                nota02[i] = n2
            }

            for (let i = 0; i < n; i++) {
                medias[i] = (nota01[i] + nota02[i]) / 2
            }

            for (let p in medias) {
                if(medias[p] >= 6) {
                    res.innerHTML += `<p>${alunos[p]}</p>`
                }
            }
        }
    }
}

btn.addEventListener('click', gerarArray)