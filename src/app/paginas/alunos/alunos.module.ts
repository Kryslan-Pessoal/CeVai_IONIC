import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlunosPageRoutingModule } from './alunos-routing.module';

import { AlunosPage } from './alunos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlunosPageRoutingModule
  ],
  declarations: [AlunosPage]
})
export class AlunosPageModule {}
