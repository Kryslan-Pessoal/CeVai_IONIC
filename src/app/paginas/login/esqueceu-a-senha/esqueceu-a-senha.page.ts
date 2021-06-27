import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import Log from 'src/app/utilitarios/Log';

@Component({
  selector: 'app-esqueceu-a-senha',
  templateUrl: './esqueceu-a-senha.page.html',
  styleUrls: ['./esqueceu-a-senha.page.scss'],
})
export class EsqueceuASenhaPage implements OnInit {

  //#region Globais
	email: string = "";

	//#endregion Globais


	//#region Start
	constructor(
		private alertController: AlertController,
		private navController: NavController,
		private toastController: ToastController,
	){}

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

	//#region Botões
	recuperarSenhaClick(){
    Log.d("this.email", this.email);
		if(this.email == ""){
			this.toast("E-mail não pode estar vazio!")
		}else{
			this.exibeMensagem("E-mail enviado!", "Um e-mail com informações da recuperação de senha foi enviado, verifique seu Email!");
		}
	}
	//#endregion Botõe

	//#region Utilitários
	configuraStatusBar(){

		StatusBar.setOverlaysWebView({ overlay: false });  //Deixa Toolbar visível

		StatusBar.setBackgroundColor({color:'#e08b01'});

	}
	public async exibeMensagem(titulo: string, mensagem: string){
		const alertaSair = await this.alertController.create({
			header: titulo,
			message: mensagem,
			buttons: [{
			text: 'Ok',
			handler: () => {   
				this.navController.back();
			}
			}]
		});

		alertaSair.present();
	}
	async toast(mensagem: string) {
		const toast = await this.toastController.create({
			message: mensagem,
			duration: 2000
		});
		toast.present();
	}
	//#endregion Utilitários

}
