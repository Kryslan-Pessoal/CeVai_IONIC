import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  constructor(
    private menu: MenuController,
  ) { }

  ngOnInit() {
    this.configuraStatusBar();
  }
  ionViewDidLeave() {
    this.menu.enable(true);
    StatusBar.setOverlaysWebView({ overlay: false }); 
    StatusBar.setBackgroundColor({color:'#F57C00'});
  }

  configuraStatusBar(){
    StatusBar.setOverlaysWebView({ overlay: true });  //Deixa statusbar Transparente
  }
}
