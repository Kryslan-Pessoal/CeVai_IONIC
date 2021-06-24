import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { MenuController, NavController } from '@ionic/angular';
import { Itinerario } from 'src/app/entidades/Itinerario';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'app-itinerarios',
  templateUrl: './itinerarios.page.html',
  styleUrls: ['./itinerarios.page.scss'],
})
export class ItinerariosPage implements OnInit {

	itinerarios: Itinerario[];

	constructor(
		private menu: MenuController,
		private navController: NavController,
		private storage: StorageService,
	){
		this.configuraStatusBar();
		this.menu.enable(true);
		this.carregaItinerarios();
	}
	carregaItinerarios(){
		this.storage.getItinerarios().then(
			itinerariosDoBanco => {
				this.itinerarios = itinerariosDoBanco;
			}
		);
	}
	ngOnInit(){}

	

	rota_cardClick(){
		this.navController.navigateForward(['rota']);
	}
	fabAdicionarItinerario_click(){
		this.navController.navigateForward(["cadastro-de-itinerario"]);
	}

	configuraStatusBar(){
	  StatusBar.setOverlaysWebView({ overlay: false });  //Deixa Toolbar visível
	  StatusBar.setBackgroundColor({color:'#F57C00'});
	}
}
