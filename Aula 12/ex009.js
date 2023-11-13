var idade = 60
if (idade < 16) {
    console.log('voto proibido')
} else if (idade < 18 || idade >= 60){
    console.log('voto opcional')
} else {
    console.log('voto obrigatório')
}