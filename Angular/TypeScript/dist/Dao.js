"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dao {
    constructor() {
        this.nomeTabela = '';
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
        return Object();
    }
    selecionar(id) {
        console.log('lógica de select');
        return Object();
    }
    selecionarTodos() {
        console.log('lógica de getAll');
        return Object();
    }
}
exports.default = Dao;
