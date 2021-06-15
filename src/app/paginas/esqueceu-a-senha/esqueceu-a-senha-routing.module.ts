import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsqueceuASenhaPage } from './esqueceu-a-senha.page';

const routes: Routes = [
  {
    path: '',
    component: EsqueceuASenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsqueceuASenhaPageRoutingModule {}
