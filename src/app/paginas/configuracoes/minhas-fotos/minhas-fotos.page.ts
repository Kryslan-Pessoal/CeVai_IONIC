import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-minhas-fotos',
  templateUrl: './minhas-fotos.page.html',
  styleUrls: ['./minhas-fotos.page.scss'],
})
export class MinhasFotosPage implements OnInit {

  constructor() {
    this.configuraStatusBar();
   }

  ngOnInit() {}

  configuraStatusBar(){
    StatusBar.setOverlaysWebView({ overlay: false });
    StatusBar.setBackgroundColor({ color:'#F57C00' });
  }
}
