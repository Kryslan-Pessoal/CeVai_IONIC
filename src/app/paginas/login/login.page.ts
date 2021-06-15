import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { StatusBar } from '@capacitor/status-bar';
import { MenuController, NavController } from '@ionic/angular';
import Log from 'src/app/utilitarios/Log';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class HomePage {

  //#region Start
  constructor(
    public router: Router,
    private navController : NavController,
    public menu: MenuController,
  ) {}

  ngOnInit(){
    
    this.configuraStatusBar();

    this.menu.enable(false);
    
  }
  //#endregion Start

  //#region Buttons
  async entrarComGoogle_click(){
    //TODO: login com google
  }
  async entrarComFacebook_click(){
    //TODO: login com facebook
  }
  entrarComSuaConta_click(){
    this.navController.navigateForward(["entrar-com-usuario-e-senha"]);
  }
  esqueceuASenha_click(){
    this.navController.navigateForward(["esqueceu-a-senha"]);
  }
  //#endregion Buttons

   //#region Utilitários
   configuraStatusBar(){
    
    StatusBar.setOverlaysWebView({ overlay: true });  //Deixa statusbar Transparente

    StatusBar.setBackgroundColor({color:'#CCCCCC'});

  }
  //#endregion Utilitários

}
