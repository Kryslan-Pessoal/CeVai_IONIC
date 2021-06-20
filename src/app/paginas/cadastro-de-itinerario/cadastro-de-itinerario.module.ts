import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroDeItinerarioPageRoutingModule } from './cadastro-de-itinerario-routing.module';

import { CadastroDeItinerarioPage } from './cadastro-de-itinerario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroDeItinerarioPageRoutingModule
  ],
  declarations: [CadastroDeItinerarioPage]
})
export class CadastroDeItinerarioPageModule {}
