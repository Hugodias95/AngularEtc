import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PainelComponent } from '../painel/painel.component';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  //public coracaoVazio: string = '<../../assets/coracao_vazio.png'
  //public coracaoCheio: string = '<../../assets/coracao_cheio.png'
  //Property bind, atributo de um determinado elemento HTML seja estabelecido em uma variável do componente

  @Input() public tentativas: number = 3
  //Vai ser decorada com o valor recebido no momento da instância do componente tentativas no painel

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ]

  constructor() {
    console.log(this.coracoes)

  }

  ngOnChanges(): void {
    //this.tentativas
    //compara com
    //this.coracoes.lenght
    if (this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice -1].cheio = false
    }
    console.log('tentativas recebidas do painel', this.tentativas)
  }

  ngOnInit() {
    
  }
}
