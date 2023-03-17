import { Component } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent {

  public coracaoVazio: string = '<../../assets/coracao_vazio.png'
  public coracaoCheio: string = '<../../assets/coracao_cheio.png'
  //Property bind, atributo de um determinado elemento HTML seja estabelecido em uma variável do componente

}
