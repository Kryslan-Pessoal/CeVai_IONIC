import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { StatusBar } from '@capacitor/status-bar';
import { MenuController, NavController } from '@ionic/angular';

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
  async entrarComGoogle(){
    //TODO: login com google
  }
  async entrarComFacebook(){
    //TODO: login com facebook
  }
  //#endregion Buttons

   //#region Utilitários
   configuraStatusBar(){
    
    StatusBar.setOverlaysWebView({ overlay: true });  //Deixa statusbar Transparente

    StatusBar.setBackgroundColor({color:'#CCCCCC'});

  }
  //#endregion Utilitários

}
