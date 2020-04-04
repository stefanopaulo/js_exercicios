function tabuada() {   
    let num = document.querySelector('#txtn')
    let sel = document.querySelector('#sel')
    
    if (num.value.length == 0) {
        alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        
        sel.innerHTML = ''

        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            
            item.text = `${n} x ${i} = ${n * i}`
            item.value = `tab${i}`
            
            sel.appendChild(item)
        }
    }
}