import DaoInterface from "./DaoInterface";
import Pessoa from "./Pessoa";

export default class PessoaDao implements DaoInterface<Pessoa> {

    nomeTabela: string = 'tb_pessoa'

    inserir(object: Pessoa): boolean {
        console.log('lógica de insert')
        return true //ou false
    }
    atualizar(object: Pessoa): boolean {
        console.log('lógica de update')
        return true //ou false
    }
    remover(id: number): Pessoa {
        console.log('lógica de delete')
        return new Pessoa('','')
    }
    selecionar(id: number): Pessoa {
        console.log('lógica de select')
        return new Pessoa('','')
    }
    selecionarTodos(): [Pessoa] {
        console.log('lógica de getAll')
        return [new Pessoa('','')]
    }

}