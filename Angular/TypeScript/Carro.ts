import Veiculo from "./Veiculo"
export class Carro extends Veiculo{
    private numeroDePortas

    constructor(modelo: string, numeroDePortas: number) {
        super()
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }


}
//instanciação da classe/objeto
//gerar um objeto que pode ser utilizado dentro do código

/*let carroA = new Carro('Veloster', 3)
console.log(carroA)
carroA.acelerar()
carroA.acelerar()
carroA.acelerar()
carroA.acelerar()
carroA.acelerar()
console.log(carroA)
carroA.parar()
console.log(carroA)*/
