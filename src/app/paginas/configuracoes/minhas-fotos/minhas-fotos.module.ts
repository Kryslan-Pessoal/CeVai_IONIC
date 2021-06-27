import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhasFotosPageRoutingModule } from './minhas-fotos-routing.module';

import { MinhasFotosPage } from './minhas-fotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhasFotosPageRoutingModule
  ],
  declarations: [MinhasFotosPage]
})
export class MinhasFotosPageModule {}
