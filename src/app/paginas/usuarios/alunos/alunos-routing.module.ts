import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosPage } from './alunos.page';

const routes: Routes = [
  {
    path: '',
    component: AlunosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunosPageRoutingModule {}
