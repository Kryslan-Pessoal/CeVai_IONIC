import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItinerariosPage } from './itinerarios.page';

const routes: Routes = [
  {
    path: '',
    component: ItinerariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItinerariosPageRoutingModule {}
