import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Oferta[]

  //cria como atribituto da classe do componente
  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {
    this.ofertasService.getOfertaPorCategoria('diversao')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas
      })

  }


}
