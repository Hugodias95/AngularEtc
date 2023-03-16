import {Carro} from './Carro'
//Carro as c (mudar nome)
//import Carro, from './Carro' (para export default)
import Pessoa from './Pessoa'
import {Concessionaria} from './Concessionaria'

//--------Criar carros---------//

let carroA = new Carro('Corsinha', 4)
let carroB = new Carro('Celta', 4)
let carroC = new Carro('Sonata', 4)

//-------Montar a lista de carros da concessionária-------//

let listaDeCarros: Carro[] = [carroA,carroB,carroC]

let concessionaria = new Concessionaria('Avenida dos Índios', listaDeCarros)

//-------Exibir a lista de carros-------//

//console.log(concessionaria.mostrarListaDeCarros())

//-------Comprar o carro-------//.
//-------Comparar de o carro preferido existe na concessionária-------//

let cliente = new Pessoa('Hugo','Corsinha')

//console.log('Carro preferido do cliente: ' + cliente.dizerCarroPreferido())

//função de callback que recebe por parâmetro os dados do índice em questão
concessionaria.mostrarListaDeCarros().map((carroLista: Carro) => {
    //Compara para comprar
    if ((carroLista['modelo']) == cliente.dizerCarroPreferido())
    cliente.comprarCarro(carroLista)
})

console.log(cliente.dizerCarroQueTem())
console.log(concessionaria.fornecerHorarioDeFuncionamento())

