import DaoInterface from "./DaoInterface";
import { Concessionaria } from "./Concessionaria";

export default class ConcessionariaDao implements DaoInterface<Concessionaria> {

    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Concessionaria): boolean {
        console.log('lógica de insert')
        return true //ou false
    }
    atualizar(object: Concessionaria): boolean {
        console.log('lógica de update')
        return true //ou false
    }
    remover(id: number): Concessionaria {
        console.log('lógica de delete')
        return new Concessionaria('',[])
    }
    selecionar(id: number): Concessionaria {
        console.log('lógica de select')
        return new Concessionaria('',[])
    }
    selecionarTodos(): [Concessionaria] {
        console.log('lógica de getAll')
        return [new Concessionaria('',[])]
    }

}