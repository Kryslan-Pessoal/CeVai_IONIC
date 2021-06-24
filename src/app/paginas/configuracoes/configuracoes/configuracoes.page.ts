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
  ){}

  ngOnInit() {
    this.configuraStatusBar();
  }

  telaGeralConfiguracoes_click(){
    this.navController.navigateForward(["configuracoes-conta"]);
  }
  telaNotificacoes_click(){
    this.navController.navigateForward(["notificacoes"]);
  }
  telaPagamentos_click(){
    this.navController.navigateForward(["pagamentos"]);
  }
  telaEndereco_click(){
    this.navController.navigateForward(["endereco"]);
  }
  telaFotos_click(){}

  configuraStatusBar(){
    StatusBar.setOverlaysWebView({ overlay: false });
    StatusBar.setBackgroundColor({color:'#F57C00'});
  }
}