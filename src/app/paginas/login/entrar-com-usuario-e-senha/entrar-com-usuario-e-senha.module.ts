import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrarComUsuarioESenhaPageRoutingModule } from './entrar-com-usuario-e-senha-routing.module';

import { EntrarComUsuarioESenhaPage } from './entrar-com-usuario-e-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrarComUsuarioESenhaPageRoutingModule
  ],
  declarations: [EntrarComUsuarioESenhaPage]
})
export class EntrarComUsuarioESenhaPageModule {}
