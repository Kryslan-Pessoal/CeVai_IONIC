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

  configuracoesDaConta_click(){
    this.navController.navigateForward(["configuracoes-conta"]);
  }
  notificacoes_click(){
    this.navController.navigateForward(["notificacoes"]);
  }
  pagamentos_click(){
    this.navController.navigateForward(["pagamentos"]);
  }
  endereco_click(){
    this.navController.navigateForward(["endereco"]);
  }
  minhasFotos_click(){
    this.navController.navigateForward(["minhas-fotos"]);
  }

  bancoDeDados_click(){
    this.navController.navigateForward(["banco-de-dados"]);
  }

  configuraStatusBar(){
    StatusBar.setOverlaysWebView({ overlay: false });
    StatusBar.setBackgroundColor({color:'#F57C00'});
  }
}