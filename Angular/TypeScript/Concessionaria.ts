import { Carro } from './Carro'
import ConcessionariaInterface from './ConcessionariaInterface'

export class Concessionaria implements ConcessionariaInterface {
    private endereco: string
    private listaDeCarros: Array<Carro> //pode receber qualquer tipo de dado com o any

    constructor(endereco: string, listaDeCarros: Carro[]) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros
    }


    public fornecerHorarioDeFuncionamento(): string {
        return 'De segunda a sexta, das 8 às 18'
    }
}

/*let concessionaria = new Concessionaria('Avenida dos Índios')
console.log(concessionaria)*/
