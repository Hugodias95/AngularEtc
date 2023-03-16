"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    dizerNome() {
        return this.nome;
    }
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    comprarCarro(carroNovo) {
        this.carro = carroNovo;
    }
    dizerCarroQueTem() {
        return this.carro;
    }
}
exports.default = Pessoa;
/*let pessoa = new Pessoa('Hugo','Intruder')
console.log(pessoa.dizerCarroPreferido())*/ 
