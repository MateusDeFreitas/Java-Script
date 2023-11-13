var lista = []
var maior = 0
var menor = 101 
var soma = 0

function adição() {

    var nu = document.getElementById('num')
    var lis = document.getElementById('lnumeros')
    var n = Number(nu.value)


    if (nu.value.length == 0) {
        window.alert("[ERRO] Por favor insira um valor.")
    } else if (nu.value < 1 || nu.value > 100) {
        window.alert("[ERRO] Valor invalido.")
    } else if (lista.indexOf(n) != -1) {
        window.alert("Esse valor já foi adicionado.")
    } else {

        lista.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        lis.appendChild(item)


        if (n > maior) {
            maior = n}
        if (n < menor) {
            menor = n}
        soma += n
        }
    }



function finalizar() {

    var divisor = lista.length
    var media = soma/divisor

    p1.innerHTML = `Ao todo foram cadastrados ${lista.length} números`
    p2.innerHTML = `O maior valor informado foi ${maior}`
    p3.innerHTML = `O menor valor informado foi ${menor}`
    p4.innerHTML = `Somando os valores resulta em ${soma}`
    p5.innerHTML = `A média dos valores informados é ${media}`
}