import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@capacitor/status-bar';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Aluno, Motorista, Responsavel, Usuario } from 'src/app/entidades/Usuario';
import { StorageService } from 'src/app/storage/storage.service';
import { TiposDeUsuario } from 'src/app/utilitarios/Enum';
import Log from 'src/app/utilitarios/Log';

@Component({
  selector: 'app-entrar-com-usuario-e-senha',
  templateUrl: './entrar-com-usuario-e-senha.page.html',
  styleUrls: ['./entrar-com-usuario-e-senha.page.scss'],
})
export class EntrarComUsuarioESenhaPage implements OnInit {

	//#region Globais
	email = "";
	senha = "";
	//#endregion Globais


	//#region Start
	constructor(
		private alertController: AlertController,
		private navController: NavController,
		private toastController: ToastController,
		private router: Router,
		private storage: StorageService,
		private appComponent: AppComponent,
	){}

	ngOnInit(){
		this.configuraStatusBar();
	}

	private subject = new Subject<any>();
  atualizaObservavelTipoDeUsuario(tipoDeUsuario: any) {
    this.subject.next(tipoDeUsuario);
  }
  public getTipoDeUsuario(): Subject<any> {
    return this.subject;
  }

	//TODO: debug
	ngAfterViewInit() {
		setTimeout(() => {
			// console.clear();
		}, 1000);
	}
	//#endregion Start

	//#region Botões
	login_click(){
		if(this.email == ""){
			this.toast("E-mail Não pode ser vazio!");
			return;
		}
		// if(this.senha == ""){
		// 	this.toast("Senha Não pode ser vazio!");
		// 	return;
		// }

		this.navController.navigateRoot(['itinerarios']);
		//Caso senha e email válidos
		this.logaUsuario().then(
			result => {
				this.navController.navigateForward(['itinerarios'], { 
					state: { 
					  informacoesDoUsuario: result[0],
					  tipoDeUsuario: result[1]
					}
				});

				// AppComponent.tipoDeUsuario = result[1];
				// AppComponent.nomeDoUsuario = result[0].nome;
			}
		);
	}
	esqueceuASenha_click(){
		this.navController.navigateForward(["esqueceu-a-senha"]);
	}
	//#endregion Botõe

	//#region Login
	async logaUsuario(){
		return new Promise((resolve) => {
			// if((this.email == "kryslan2680@gmail.com" && this.senha == "pokemon123")){
				if((this.email == "a" && this.senha == "")){
					this.storage.getAluno().then(
						aluno => {
							resolve([aluno[0], TiposDeUsuario.ALUNO]);
						}
					);
			// }else if(this.email == "sjs13990@gmail.com" && this.senha == "pokemon123"){
			}else if(this.email == "r" && this.senha == ""){
				this.storage.getResponsavel().then(
					responsavel => {
						resolve([responsavel, TiposDeUsuario.RESPONSAVEL]);
					}
				);
			// }else if(this.email == "gabriel244468@gmail.com" && this.senha == "pokemon123"){
			}else if(this.email == "a1" && this.senha == ""){
				
				let aluno: Aluno = new Aluno();

				resolve([aluno, TiposDeUsuario.ALUNO]);
			// }else if(this.email == "fabioasilva94@gmail.com" && this.senha == "pokemon123"){
			}else if(this.email == "m" && this.senha == ""){
				this.storage.getMotorista().then(
					motorista => {
						resolve([motorista, TiposDeUsuario.MOTORISTA]);
					}
				);
			}else{
				this.alert("Erro!", "Usuário e/ou senha errados!");
			}
		});
	}
	//#endregion Login

	//#region Utilitários
	configuraStatusBar(){

		StatusBar.setOverlaysWebView({ overlay: false });  //Deixa Toolbar visível

		StatusBar.setBackgroundColor({color:'#e08b01'});

	}
	public async alert(titulo: string, mensagem: string){
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
			duration: 1000
		});
		toast.present();
	}
	//#endregion Utilitários
}
