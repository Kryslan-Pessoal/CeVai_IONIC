import { Component } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: 'endereco.page.html',
  styleUrls: ['./endereco.page.scss'],
})

export class EnderecoPage {

      nomeEstados = [
        'Minas Gerais','São Paulo','Es  pírito Santo'
      ];

      nomeCidades = [
        'Timóteo','Cel. Fabriciano','Ipatinga'
      ];

      nomeBairros = [
        'Ana Moura','Funcionários','Timirim', 'Cidade Nobre','Iguaçu'
      ];
    }