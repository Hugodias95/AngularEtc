"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class PessoaDao {
    constructor() {
        this.nomeTabela = 'tb_pessoa';
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
        return new Pessoa_1.default('', '');
    }
    selecionar(id) {
        console.log('lógica de select');
        return new Pessoa_1.default('', '');
    }
    selecionarTodos() {
        console.log('lógica de getAll');
        return [new Pessoa_1.default('', '')];
    }
}
exports.default = PessoaDao;
