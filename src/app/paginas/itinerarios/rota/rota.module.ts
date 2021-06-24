import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RotaPageRoutingModule } from './rota-routing.module';

import { RotaPage } from './rota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RotaPageRoutingModule
  ],
  declarations: [RotaPage]
})
export class RotaPageModule {}
