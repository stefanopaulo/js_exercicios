function maiorDistancia() {
    var dist1 = document.querySelector('#dist1')
    var dist2 = document.querySelector('#dist2')
    var dist3 = document.querySelector('#dist3')
    var maiordist = document.querySelector('#maiordist')

    var maiorD

    var d1 = Number(dist1.value)
    var d2 = Number(dist2.value)
    var d3 = Number(dist3.value)

    if (d1 > d2 && d1 > d3) {
        maiorD = d1
    } else if (d2 > d3) {
        maiorD = d2
    } else {
        maiorD = d3
    }

    maiordist.innerHTML = `Maior Distância = ${maiorD.toFixed(2)}`

    dist1.value = ''
    dist2.value = ''
    dist3.value = ''
}