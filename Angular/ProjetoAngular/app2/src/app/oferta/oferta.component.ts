import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, Observer, Subscription } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  private tempoObservableSubscription: Subscription
  private meuObservableTesteSubscription: Subscription

  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  ngOnInit() {
    
    //Se inscreve nos parâmetro do route(ActivatedRoute) para informar como ele poderá tratar o disparo de eventos em sua stream
    this.route.params.subscribe((parametrosDaRota: Params) => {
      
      this.ofertasService.getOfertaPorId(parametrosDaRota['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta
      })
      
    })
    


    //Cria o observável com o intervalo de tempo de 500 milisegundos
    this.tempoObservableSubscription = interval(2000).subscribe((intervalo: number) => {
    })
    //Cria o observador que se inscreve no observável e recupera seus dados


    //(Observável)
    let meuObservableTeste = new Observable((observer: Observer<number>) => {
      observer.next(1)
      observer.next(3)
      observer.complete()
      observer.error('Algum erro foi encontrado')
      //Nada acontece após o erro, caso não seja tratado
      //Também para no complete
    })

    //(Observador)
    this.meuObservableTesteSubscription = meuObservableTeste.subscribe({
      next: (resultado: any) => console.log(resultado),
      error: (erro: string) => console.log(erro),
      complete: () => console.log('A stream de eventos foi finalizada')

      /* DEPRECATED
      (resultado: any) => console.log(resultado), 
      (erro: string) => console.log(erro),
      () => console.log('A stream de eventos foi finalizada')
      */
    })


    /*      this.route.params.subscribe({
            next: (v) => console.log(v),
            error: (e) => console.log(e),
            complete: () => console.log('Processamento foi classificado como concluído')
          })
    */
    //this.route.params.subscribe((parametro: any) => {
    //console.log(parametro.id)
    //})
  }

  ngOnDestroy() {
    this.meuObservableTesteSubscription.unsubscribe()
    this.tempoObservableSubscription.unsubscribe()
    console.log('Componentes subscribe desinscritos')
  }

}
