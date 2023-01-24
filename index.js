function tabuada() {
    //Chamando os elementos que serão utilizados
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    //Verificando se o input está vazio
    if (num.value.length == 0) {
           alert('não pode haver espaços em branco')
    }
    //Criando a tabuada
    else {
        let n = Number(num.value) 
        let c = 1;
        tab.innerHTML = ""
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
        
}