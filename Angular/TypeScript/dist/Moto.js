"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Veiculo_1 = __importDefault(require("./Veiculo"));
class Moto extends Veiculo_1.default {
    constructor(modeloMoto) {
        super();
        this.modelo = modeloMoto;
    }
    //Sobreescreveu o método acelerar da classe Veiculo
    acelerar() {
        this.velocidade = this.velocidade + 15;
    }
}
exports.default = Moto;
