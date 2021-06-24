import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhasFotosPage } from './minhas-fotos.page';

const routes: Routes = [
  {
    path: '',
    component: MinhasFotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhasFotosPageRoutingModule {}
