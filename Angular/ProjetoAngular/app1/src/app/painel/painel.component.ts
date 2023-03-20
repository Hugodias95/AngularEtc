import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  public frases: Frase[] = FRASES
  //String Interpolation
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase = this.frases[this.rodada]
  //Pega a frase baseada na posição do array frases, populado pelo mock de frases. No caso, ele começa com a posição da rodada, 0

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()
  //cria um atributo associado à instância da classe event emitter e decore esse atributo para que ele possa ser exponto para componentes pai

  constructor() {

    this.atualizaRodada()
  }

  ngOnDestroy() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePT == this.resposta) {

      //Verificar se rodada é idêntico a 4
      if (this.rodada === 4) {
        this.encerrarJogo.emit('Vitória')
      }

      //trocar pergunta da rodada e atualiza a rodada
      this.atualizaRodada()

      //progresso
      this.progresso += (100 / this.frases.length)

    } else {
      alert('A tradução está incorreta')
      //diminuir a variável tentativas
      this.tentativas--

      if (this.tentativas === -1) {
        this.encerrarJogo.emit('Derrota')
      }

    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.rodada++

    //limpar resposta
    this.resposta = ''
  }

}
