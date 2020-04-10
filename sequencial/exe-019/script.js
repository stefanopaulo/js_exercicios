const cofa = document.querySelector('#cofa')
const cofb = document.querySelector('#cofb')
const cofc = document.querySelector('#cofc')
const res = document.querySelector('#res')

function coeficientes() {
    if(cofa.value.length == 0 || cofb.value.length == 0 || cofc.value.length == 0) {
        alert('[Erro] Os campos não podem estar vazios!')
    } else {
        let a = Number(cofa.value)
        let b = Number(cofb.value)
        let c = Number(cofc.value)

        let d = b ** 2 - 4 * a * c

        let x1 = -b + Math.sqrt(d) / (2 * a)
        let x2 = -b - Math.sqrt(d) / (2 * a)

        res.innerHTML = `
            <p>X': ${x1}</p>
            <p>X": ${x2}</p>
        `
    }
}