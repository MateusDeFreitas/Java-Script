function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] verifique os dados e tente novamente.")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var ggenero = ''
        if (fsex[0].checked) {
            genero = 'homem'
            ggenero = 'um homem'
        } else if (fsex[1].checked) {
            genero = 'mulher'
            ggenero = 'uma mulher'
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${ggenero} com ${idade} anos!` 
    }

}