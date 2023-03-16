"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Concessionaria_1 = require("./Concessionaria");
class ConcessionariaDao {
    constructor() {
        this.nomeTabela = 'tb_concessionaria';
    }
    inserir(object) {
        console.log('lógica de insert');
        return true; //ou false
    }
    atualizar(object) {
        console.log('lógica de update');
        return true; //ou false
    }
    remover(id) {
        console.log('lógica de delete');
        return new Concessionaria_1.Concessionaria('', []);
    }
    selecionar(id) {
        console.log('lógica de select');
        return new Concessionaria_1.Concessionaria('', []);
    }
    selecionarTodos() {
        console.log('lógica de getAll');
        return [new Concessionaria_1.Concessionaria('', [])];
    }
}
exports.default = ConcessionariaDao;
