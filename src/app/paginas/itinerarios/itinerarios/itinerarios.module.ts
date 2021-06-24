import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItinerariosPageRoutingModule } from './itinerarios-routing.module';

import { ItinerariosPage } from './itinerarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItinerariosPageRoutingModule
  ],
  declarations: [ItinerariosPage]
})
export class ItinerariosPageModule {}
