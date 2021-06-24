import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BancoDeDadosPage } from './banco-de-dados.page';

const routes: Routes = [
  {
    path: '',
    component: BancoDeDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BancoDeDadosPageRoutingModule {}
