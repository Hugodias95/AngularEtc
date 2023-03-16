import Veiculo from "./Veiculo";

class Moto extends Veiculo {

    constructor(modeloMoto:string) {
        super()
        this.modelo = modeloMoto
    }

    //Sobreescreveu o método acelerar da classe Veiculo
    public acelerar(): void {
        this.velocidade = this.velocidade + 15
    }

}

export default Moto