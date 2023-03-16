"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const Veiculo_1 = __importDefault(require("./Veiculo"));
class Carro extends Veiculo_1.default {
    constructor(modelo, numeroDePortas) {
        super();
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
}
exports.Carro = Carro;
//instanciação da classe/objeto
//gerar um objeto que pode ser utilizado dentro do código
/*let carroA = new Carro('Veloster', 3)
console.log(carroA)
carroA.acelerar()
carroA.acelerar()
carroA.acelerar()
carroA.acelerar()
carroA.acelerar()
console.log(carroA)
carroA.parar()
console.log(carroA)*/
