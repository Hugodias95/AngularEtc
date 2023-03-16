"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import ConcessionariaDao from "./ConcessionariaDao";
const Concessionaria_1 = require("./Concessionaria");
//import PessoaDao from "./PessoaDao";
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Dao_1 = __importDefault(require("./Dao"));
//let dao: ConcessionariaDao = new ConcessionariaDao()
//let dao2: PessoaDao = new PessoaDao()
//dao.inserir(concessionaria)
//dao2.atualizar(pessoa)
let concessionaria = new Concessionaria_1.Concessionaria('', []);
let pessoa = new Pessoa_1.default('', '');
//Cria uma instância da classe Dao passando para essa classe genérica o tipo concessionária
let dao3 = new Dao_1.default();
dao3.inserir(concessionaria);
let dao4 = new Dao_1.default();
dao4.remover(5);
