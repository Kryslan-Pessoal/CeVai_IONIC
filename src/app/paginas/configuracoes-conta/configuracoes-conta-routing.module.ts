import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracoesContaPage } from './configuracoes-conta.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracoesContaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracoesContaPageRoutingModule {}
