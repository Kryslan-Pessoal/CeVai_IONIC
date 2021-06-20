import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-itinerarios',
  templateUrl: './itinerarios.page.html',
  styleUrls: ['./itinerarios.page.scss'],
})
export class ItinerariosPage implements OnInit {

 	//#region Globais

	//#endregion Globais


	//#region Start
	constructor(
		private menu: MenuController,
		private navController: NavController,
	){
		this.menu.enable(true);
	}

	ngOnInit(){}
	//TODO: debug
  ngAfterViewInit() {
    setTimeout(() => {
      // console.clear();
    }, 1000);
  }
	//#endregion Start

	//#region Botões
	fabAdicionarItinerario_click(){
		this.navController.navigateForward(["cadastro-de-itinerario"]);
	}
	//#endregion Botõe

	//#region Utilitários
	configuraStatusBar(){

	  StatusBar.setOverlaysWebView({ overlay: false });  //Deixa Toolbar visível

	  StatusBar.setBackgroundColor({color:'#3D6222'});

	}
	//#endregion Utilitários

}
