import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BancoDeDadosPageRoutingModule } from './banco-de-dados-routing.module';

import { BancoDeDadosPage } from './banco-de-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BancoDeDadosPageRoutingModule
  ],
  declarations: [BancoDeDadosPage]
})
export class BancoDeDadosPageModule {}
