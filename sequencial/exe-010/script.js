let a = 1,
    b = 2, 
    c = 3,
    aux

aux = a
a = c
c = b
b = aux

console.log(`a = ${a}, b = ${b}, c = ${c}`)