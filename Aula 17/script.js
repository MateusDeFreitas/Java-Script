function gerar() {

    var nu = document.getElementById("num")
    var tab = document.getElementById("tabua")
    var lmt = document.getElementById("lim")

    if(nu.value.length == 0 || lmt.value.length == 0) {
        window.alert("[ERRO] Por favor insira os valores corretamente.") 
    } else {
        var n = Number(nu.value)
        var l = Number(lmt.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= l) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${C}`
            tab.appendChild(item)
            c++
        }
    
    }

}