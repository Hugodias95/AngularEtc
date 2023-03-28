import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {
  
  public endereco: string = ''
  public numero: number = null
  public complemento: string = ''
  public formaPagamento:string = ''

  //controle de validação dos campos
  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean

  //estado primitivo do campo (pristine)
  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public complementoEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true

  //controlar botão confirmar compra
  public formEstado: string = 'disabled'

  constructor(private ordemCompraService: OrdemCompraService) {

  }
  
  ngOnInit() {
    this.ordemCompraService.efetivarCompra()
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco

    this.enderecoEstadoPrimitivo = false

    //se a string for maior que 10
    if(this.endereco.length > 10) {
      this.enderecoValido = true
    }else {
      this.enderecoValido = false
    }
    this.habilitaForm()
  }   
  
  public atualizaNumero(numero: number): void {
    this.numero = numero

    this.numeroEstadoPrimitivo = false

    if(numero > 0) {
      this.numeroValido = true
    } else {
      this.numeroValido = false
    }
    this.habilitaForm()
  }
  
  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento

    this.complementoEstadoPrimitivo = false

    if(this.complemento.length > 0) {
      this.complementoValido = true
    }else {
      this.complementoValido = false
    }
    this.habilitaForm()
  }
  
  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento

    this.formaPagamentoEstadoPrimitivo = false

    if (formaPagamento == 'selecione') {
      this.formaPagamentoValido = false
    } else {
      this.formaPagamentoValido = true
    }
    this.habilitaForm()
  }

  public habilitaForm():void {
    if (this.enderecoValido === true && this.numeroValido === true && this.complementoValido === true && this.formaPagamentoValido === true) {
      this.formEstado = ''
    } else {
      this.formEstado = 'disabled'
    }
  }

}
