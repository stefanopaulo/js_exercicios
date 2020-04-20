const cofa = document.querySelector('#cofa')
const cofb = document.querySelector('#cofb')
const cofc = document.querySelector('#cofc')
const btn = document.querySelector('#btn')
const res = document.querySelector('.res')

function checksEmpty() {
    if(cofa.value.length == 0 || cofb.value.length == 0 || cofc.value.length == 0) 
        return true
}

function equationRoot() {
    if(checksEmpty()) {
        alert('[Erro] Os campos não podem estar vazios!')
    } else {
        let a = Number(cofa.value)
        let b = Number(cofb.value)
        let c = Number(cofc.value)
        let x1, x2, delta

        if (a == 0) {
            res.innerHTML = `
                <p>Não existe raíz quando o A é ZERO.</p>
            `
        } else {
            delta = Math.pow(b, 2) - 4 * a * c

            if(delta < 0) {
                res.innerHTML = `
                    <p>DELTA menor que ZERO. Não existem raízes.</p>
                `
            } else {
                x1 = -b + Math.sqrt(delta) / (2 * a)
                x2 = -b - Math.sqrt(delta) / (2 * a)

                if (delta == 0) {
                    res.innerHTML = `
                        <p>Raíz: ${x1}</p>
                    `
                } else {
                    res.innerHTML = `
                        <p>X1: ${x1}</p>
                        <p>X2: ${x2}</p>
                    `
                }
            }
        }
    }
}

btn.addEventListener('click', equationRoot)