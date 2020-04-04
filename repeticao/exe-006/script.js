var alcool = 0
var gasolina = 0
var disel = 0

do {
    var cod = Number(prompt('Informe um código (1, 2, 3) ou 4 para sair: '))

    switch (cod) {
        case 1:
            alcool++
        break

        case 2:
            gasolina++
        break

        case 3:
            disel++
        break
    }

} while (cod != 4)

alert(`
    MUITO OBRIGADO
    ALCOOL = ${alcool}
    GASOLINA = ${gasolina}
    DISEL = ${disel}
`)