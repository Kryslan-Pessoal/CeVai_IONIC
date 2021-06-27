import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrarComUsuarioESenhaPage } from './entrar-com-usuario-e-senha.page';

const routes: Routes = [
  {
    path: '',
    component: EntrarComUsuarioESenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrarComUsuarioESenhaPageRoutingModule {}
