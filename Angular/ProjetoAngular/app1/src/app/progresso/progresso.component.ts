import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent {

  @Input() public progresso: number = 25
  //coloca o mesmo nome do atributo no html como variável

  ngOnInit() {

  }

}
