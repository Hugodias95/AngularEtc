import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = ''

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {
  }

  ngOnInit() {
    //console.log('ID da rota pai', this.route.parent.snapshot.params['id'])
    //acessa parâmetros do sistema de roteamento root (pai)

    this.route.parent.params.subscribe((parametrosDaRota: Params) => {

      this.ofertasService.getComoUsarOfertaPorId(parametrosDaRota['id'])
        .then((descricao: any) => this.comoUsar = descricao)

    })

  }

}
