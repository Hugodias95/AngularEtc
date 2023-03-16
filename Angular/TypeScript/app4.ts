//import ConcessionariaDao from "./ConcessionariaDao";
import { Concessionaria } from "./Concessionaria";
//import PessoaDao from "./PessoaDao";
import Pessoa from "./Pessoa";
import Dao from "./Dao";

//let dao: ConcessionariaDao = new ConcessionariaDao()
//let dao2: PessoaDao = new PessoaDao()
//dao.inserir(concessionaria)
//dao2.atualizar(pessoa)

let concessionaria = new Concessionaria('',[])
let pessoa = new Pessoa('','')

//Cria uma instância da classe Dao passando para essa classe genérica o tipo concessionária
let dao3: Dao<Concessionaria> = new Dao<Concessionaria>()
dao3.inserir(concessionaria)
let dao4: Dao<Pessoa> = new Dao<Pessoa>()
dao4.remover(5)
