import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroDeItinerarioPage } from './cadastro-de-itinerario.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroDeItinerarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroDeItinerarioPageRoutingModule {}
