const pessoa = {
    nome: "Maria",
    apelidos: ["duda", "dudinha", "nega"]

}


function apelidos(objeto){
    console.log(`eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}`)

}

apelidos(pessoa)

const pessoa2 = {
    ...pessoa,
    apelidos: ["dudunha", "dudex", "dudalesca"]
}

apelidos(pessoa2)
