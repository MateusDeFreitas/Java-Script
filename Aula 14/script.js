function carregar() {
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 16
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora > 4 && hora <= 12) {
        document.body.style.background = 'rgb(235, 122, 56)'
    } else if (hora > 12 && hora <= 18) {
        document.body.style.background = 'rgb(31, 27, 92)'
    } else { 
        document.body.style.background = 'rgb(5, 16, 36)'
    }

}
