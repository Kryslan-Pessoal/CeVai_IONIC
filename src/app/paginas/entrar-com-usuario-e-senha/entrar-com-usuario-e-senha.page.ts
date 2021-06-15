import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-entrar-com-usuario-e-senha',
  templateUrl: './entrar-com-usuario-e-senha.page.html',
  styleUrls: ['./entrar-com-usuario-e-senha.page.scss'],
})
export class EntrarComUsuarioESenhaPage implements OnInit {

  //#region Globais

	//#endregion Globais


	//#region Start
	constructor(){}

	ngOnInit(){
		this.configuraStatusBar();
	}
	
	//TODO: debug
	ngAfterViewInit() {
	setTimeout(() => {
		// console.clear();
	}, 1000);
	}
	//#endregion Start

	//#region Listerners

	//#endregion Listerners

	//#region Botões

	//#endregion Botõe

	//#region Utilitários
	configuraStatusBar(){

	  StatusBar.setOverlaysWebView({ overlay: false });  //Deixa Toolbar visível

	  StatusBar.setBackgroundColor({color:'#e08b01'});

	}
	 
	//#endregion Utilitários

}
