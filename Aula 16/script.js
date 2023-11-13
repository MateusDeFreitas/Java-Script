function confirmar() {

    var inicio = document.getElementById("ini")
    var final  = document.getElementById("fim")
    var passo  = document.getElementById("pas")
    var resposta = document.getElementById("res")

    if ( inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0 ) {
        window.alert("[ERRO] Por favor insira os valores corretamente.") } else {
            resposta.innerHTML = "contando:<br>"
        
            let i = Number(inicio.value)
            let f = Number(final.value)
            let p = Number(passo.value)

            if (p == 0) {
                window.alert('[ERRO] O valor de "passo" não pode ser nulo, considerando "passo" igual a 1.')
                p = 1
            }

            if (i < f) {
                for (let c = i ; c <= f ; c += p) {
                    if (c + p <= f) {
                        resposta.innerHTML += `${c} \u{25b6} `
                    }
                    else {
                        resposta.innerHTML += `${c} \u{1f6a9} `
                    }
                }
            } else if (i > f) {
                for (let c = i ; c >= f ; c -= p) {
                    if (c - p >= f) {
                        resposta.innerHTML += `${c} \u{25b6} `
                    }
                    else {
                        resposta.innerHTML += `${c} \u{1f6a9} `
                    }
                }
            } else {
                window.alert('[ERRO] o valor de "início" e o valor de "Fim" não podem ser iguais.')
            }

        }
        
}