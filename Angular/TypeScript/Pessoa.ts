import {Carro} from './Carro'
export default class Pessoa {
    private nome:string
    private carroPreferido:string
    private carro:any

    constructor(nome:string, carroPreferido:string) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public comprarCarro(carroNovo: Carro): void {
        this.carro = carroNovo
    }

    public dizerCarroQueTem(): any { //não sei qual tipo vai vir no carro novo
        return this.carro
    }
}

/*let pessoa = new Pessoa('Hugo','Intruder')
console.log(pessoa.dizerCarroPreferido())*/