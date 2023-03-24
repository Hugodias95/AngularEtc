import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = ''

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    //console.log('ID da rota pai', this.route.parent.snapshot.params['id'])
    //acessa parâmetros do sistema de roteamento root (pai)

    this.route.parent.params.subscribe((parametrosDaRota: Params) => {
      
      this.ofertasService.getOndeFicaOfertaPorId(parametrosDaRota['id'])
        .then((descricao: string) => {
          this.ondeFica = descricao})

    })


  }

}
