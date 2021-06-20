import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StatusBar } from '@capacitor/status-bar';
import { MenuController, NavController } from '@ionic/angular';
import Log from 'src/app/utilitarios/Log';

@Component({
  selector: 'app-configuracoes',
  templateUrl: 'configuracoes.page.html',
  styleUrls: ['configuracoes.page.scss'],
})

export class ConfiguracoesPage implements OnInit{

  constructor(
    public router: Router,
    private navController : NavController,
    public menu: MenuController,
  ) { }

  ngOnInit() {
    this.configuraStatusBar();

    this.menu.enable(false);

  }

  telaGeralConfiguracoes_click(){
    this.navController.navigateForward(
      ["configuracoes-conta"]);
  }

  telaNotificacoes_click(){
    this.navController.navigateForward(
      ["notificacoes"]);
  }

  telaPagamentos_click(){
    this.navController.navigateForward(
      ["pagamentos"]);
  }

  telaEndereco_click(){
    this.navController.navigateForward(
      ["endereco"]);
  }
  /** telaGeralConfiguracoes_click(){
    this.navController.navigateForward(
      [""]);
  } */


  configuraStatusBar(){
    
    StatusBar.setOverlaysWebView({ overlay: true });  //Deixa statusbar Transparente

    StatusBar.setBackgroundColor({color:'#CCCCCC'});

  }
}