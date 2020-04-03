function raiz() {
    var cofa = document.querySelector('#cofa')
    var cofb = document.querySelector('#cofb')
    var cofc = document.querySelector('#cofc')

    var l1 = document.querySelector('#l1')
    var l2 = document.querySelector('#l2')
    
    var a = Number(cofa.value)
    var b = Number(cofb.value)
    var c = Number(cofc.value)

    var x1
    var x2
    var d

    if (a == 0) {
        l1.innerHTML = `Não exite Raíz quando o Coeficiente A é Zero.`
        l2.innerHTML = ''
    } else {
        d = Math.pow(b, 2) - 4 * a * c
        
        if (d < 0) {
            l1.innerHTML = `Não existe Raíz quando o Delta é menor que Zero`
            l2.innerHTML = ''
        } else {
            x1 = (-b + Math.sqrt(d)) / (2 * a)
            x2 = (-b - Math.sqrt(d)) / (2 * a)
        }
    }

    if (d == 0) {
        l1.innerHTML = `X1 = ${x1.toFixed(4)}`
    } else if (d > 0) {
        l1.innerHTML = `X1 = ${x1.toFixed(4)}`
        l2.innerHTML = `X2 = ${x2.toFixed(4)}`
    }
}