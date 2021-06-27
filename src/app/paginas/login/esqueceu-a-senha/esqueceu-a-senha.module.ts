import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsqueceuASenhaPageRoutingModule } from './esqueceu-a-senha-routing.module';

import { EsqueceuASenhaPage } from './esqueceu-a-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsqueceuASenhaPageRoutingModule
  ],
  declarations: [EsqueceuASenhaPage]
})
export class EsqueceuASenhaPageModule {}
