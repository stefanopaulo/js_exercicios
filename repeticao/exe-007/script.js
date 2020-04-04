var num = Number(prompt('Digite um número inteiro: '))

var soma

while (num != 0) {
    if (num % 2 != 0) {
        num++
    }

    soma = 5 * num + 20

    alert(`Soma do pares consecutivos = ${soma}`)

    num = Number(prompt('Digite um número inteiro: '))
}