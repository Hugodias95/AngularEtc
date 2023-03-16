"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concessionaria = void 0;
class Concessionaria {
    constructor(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
    fornecerHorarioDeFuncionamento() {
        return 'De segunda a sexta, das 8 às 18';
    }
}
exports.Concessionaria = Concessionaria;
/*let concessionaria = new Concessionaria('Avenida dos Índios')
console.log(concessionaria)*/
