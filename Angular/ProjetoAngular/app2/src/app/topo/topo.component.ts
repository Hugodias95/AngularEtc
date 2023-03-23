import { Component, OnInit } from '@angular/core';
import { debounceTime, Observable, Subject, Subscription, switchMap, of, distinctUntilChanged, catchError } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  public ofertas2: Oferta[]

  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa //retorno Ofertas[]
      //Executa a ação após determinado tempo (DEBOUNCE TIME)
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((termo: string) => {
          console.log('Requisição http para api')

          if (termo.trim() === '') {
            //retornar um observable de array de ofertas vazio
            return of<Oferta[]>([])
          }

          return this.ofertaService.pesquisaofertas(termo)
        })),

      catchError((erro: any) => {
        console.log(erro)
        return of<Oferta[]>([])
      })

    this.ofertas.subscribe((ofertas: Oferta[]) => {
      this.ofertas2 = ofertas
      console.log(ofertas)
      //O subscribe traz os dados que ele observa e joga para o array ofertas2
    })

  }



  public pesquisa(termoDeBusca: string): void {
    console.log('Keyup caracter: ', termoDeBusca)
    this.subjectPesquisa.next(termoDeBusca)

  }




  /*//#termoDaPesquisa
  //(keyup)="pesquisa(termoDaPesquisa.value)"
  public pesquisa(termoDaBusca: string): void {
    this.ofertas = this.ofertaService.pesquisaofertas(termoDaBusca)

    this.ofertas.subscribe({
      next: (ofertas: Oferta[]) => console.log(ofertas),
      error: (erro:any) => console.log('Erro status: ', erro.status),
      complete: () => console.log('Fluxo de eventos completo')
    })/*
    
    /* DEPRECATED
    (
      (ofertas: Oferta[]) => console.log(ofertas),
      (erro: any) => console.log('Erro status: ', erro.status)
    )
  }*/


  //ativado pelo (keyup)="pesquisa($event)" dentro do template
  /*public pesquisa(event: Event): void {
    (<HTMLInputElement>event.target).value
  }*/

}
