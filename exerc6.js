const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)// nome: juca, idade: 3, raca: SRD
console.log(gato)//nome: juba, idade: 3, raca: SRD
console.log(tartaruga)// nome: jubo, idade: 3, raca SRD
// a sintaxe (...) realiza a copia de um objeto ou array inteiro, é chamada de espelhamento.