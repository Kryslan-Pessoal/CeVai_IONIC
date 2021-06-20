import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RotaPage } from './rota.page';

const routes: Routes = [
  {
    path: '',
    component: RotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RotaPageRoutingModule {}
