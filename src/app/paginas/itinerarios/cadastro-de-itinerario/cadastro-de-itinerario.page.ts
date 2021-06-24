import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-de-itinerario',
  templateUrl: './cadastro-de-itinerario.page.html',
  styleUrls: ['./cadastro-de-itinerario.page.scss'],
})
export class CadastroDeItinerarioPage implements OnInit {

  IDA = "Ida";
  VOLTA = "Volta";
  constructor() { }

  ngOnInit() {
  }

}
