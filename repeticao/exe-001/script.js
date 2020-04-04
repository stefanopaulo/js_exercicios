let n1 = prompt('Primeiro núemro: ')
let n2 = prompt('Segundo número: ')

while (n1 != n2) {
    if (n1 < n2) {
        alert('Crescente')
    } else {
        alert('Decrescente')
    }

    n1 = prompt('Primeiro número: ')
    n2 = prompt('Segundo número: ')
}