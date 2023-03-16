
//MODELO DE INTERFACE GENÉRICA QUE RECEBE O TYPE DO OBJETO

export default interface DaoInterface<T> {
    nomeTabela: string

    inserir(object: T): boolean
    atualizar(object: T): boolean
    remover(id: number): T
    selecionar(id: number): T
    selecionarTodos(): [T]
}
