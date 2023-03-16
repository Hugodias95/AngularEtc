"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = require("./Carro");
//Carro as c (mudar nome)
//import Carro, from './Carro' (para export default)
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Concessionaria_1 = require("./Concessionaria");
//--------Criar carros---------//
let carroA = new Carro_1.Carro('Corsinha', 4);
let carroB = new Carro_1.Carro('Celta', 4);
let carroC = new Carro_1.Carro('Sonata', 4);
//-------Montar a lista de carros da concessionária-------//
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_1.Concessionaria('Avenida dos Índios', listaDeCarros);
//-------Exibir a lista de carros-------//
//console.log(concessionaria.mostrarListaDeCarros())
//-------Comprar o carro-------//.
//-------Comparar de o carro preferido existe na concessionária-------//
let cliente = new Pessoa_1.default('Hugo', 'Corsinha');
//console.log('Carro preferido do cliente: ' + cliente.dizerCarroPreferido())
//função de callback que recebe por parâmetro os dados do índice em questão
concessionaria.mostrarListaDeCarros().map((carroLista) => {
    //Compara para comprar
    if ((carroLista['modelo']) == cliente.dizerCarroPreferido())
        cliente.comprarCarro(carroLista);
});
console.log(cliente.dizerCarroQueTem());
console.log(concessionaria.fornecerHorarioDeFuncionamento());
