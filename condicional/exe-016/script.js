const ladoa = document.querySelector('#ladoa')
const ladob = document.querySelector('#ladob')
const ladoc = document.querySelector('#ladoc')
const btn = document.querySelector('#btn')
const res = document.querySelector('.res')

function checksEmpty() {
    if(ladoa.value.length == 0 || ladob.value.length == 0 || ladoc.value.length == 0)
        return true
}

function triangle() {
    if(checksEmpty()) {
        alert('[Erro] Os campos não podem estar vazios!')
    } else {
        let a = Number(ladoa.value)
        let b = Number(ladob.value)
        let c = Number(ladoc.value)

        if(a > (b + c) || b > (a + c) || c > (b + a)) {
            res.innerHTML = `
                <p>Não pode formar um triângulo.</p>
            ` 
        } else {
            if((a == b && b != c) || (a == c && c != b) || (b == c && c != a)) {
                res.innerHTML = `
                    <p>Triângulo Isoceles</p>
                `
            } else if(a != b && a != c && b != c) {
                res.innerHTML = `
                    <p>Triângulo Escaleno</p>
                `
            } else {
                res.innerHTML = `
                    <p>Triângulo Equilátero</p>
                `
            }
        }
    }
}

btn.addEventListener('click', triangle)