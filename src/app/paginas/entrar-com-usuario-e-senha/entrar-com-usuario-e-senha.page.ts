import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@capacitor/status-bar';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Aluno, Motorista, Responsavel, Usuario } from 'src/app/entidades/aluno';
import { TiposDeUsuario } from 'src/app/utilitarios/Enum';

@Component({
  selector: 'app-entrar-com-usuario-e-senha',
  templateUrl: './entrar-com-usuario-e-senha.page.html',
  styleUrls: ['./entrar-com-usuario-e-senha.page.scss'],
})
export class EntrarComUsuarioESenhaPage implements OnInit {

	//#region Globais
	email: string = "";
	senha: string = "";

	//#endregion Globais


	//#region Start
	constructor(
		private alertController: AlertController,
		private navController: NavController,
		private toastController: ToastController,
		private router: Router,
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
	login_click(){
		if(this.email == ""){
			this.toast("E-mail Não pode ser vazio!");
			return;
		}
		if(this.senha == ""){
			this.toast("Senha Não pode ser vazio!");
			return;
		}

		//Caso senha e email válidos
		this.logaUsuario().then(
			result => {
				this.router.navigate(['nota-fiscal'], { 
					state: { 
					  dadosDoFormulario: result[0],
					  tipoDeUsuario: result[1] 
					} 
				  });
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
			if((this.email == "kryslan2680@gmail.com" && this.senha == "pokemon123")){
				
				let aluno: Aluno = new Aluno();

				//TODO: informação gravada no banco de dados, ao iniciar app
				aluno.idUsuario = 0;
				aluno.email = this.email;
				aluno.nome = "Kryslan Gomes";
				aluno.nomeCompleto = "Kryslan Gomes";
				aluno.telefone = "31982665474";
				aluno.idade = 24;
				aluno.idResonsavel = 1;
				aluno.idMotorista = 3;

				resolve([aluno, TiposDeUsuario.ALUNO]);
			}else if(this.email == "sjs13990@gmail.com" && this.senha == "pokemon123"){
				
				let responsavel: Responsavel = new Responsavel();

				//TODO: informação gravada no banco de dados, ao iniciar app
				responsavel.idUsuario = 1;
				responsavel.email = this.email;
				responsavel.nome = "Sara";
				responsavel.nomeCompleto = "Sara de Jesus Santos";
				responsavel.telefone = "31995319857";
				responsavel.idade = 20;
				responsavel.idAluno = 0;
				responsavel.idMotorista = 3;

				resolve([responsavel, TiposDeUsuario.RESPONSAVEL_PELO_ALUNO]);
			}else if(this.email == "gabriel244468@gmail.com" && this.senha == "pokemon123"){
				
				let aluno: Aluno = new Aluno();

				//TODO: informação gravada no banco de dados, ao iniciar app
				aluno.idUsuario = 2;
				aluno.email = this.email;
				aluno.nome = "Gabriel";
				aluno.nomeCompleto = "Gabriel Tsuyoshi Shibuya";
				aluno.telefone = "119983513805";
				aluno.idade = 29;
				aluno.idResonsavel = 1;
				aluno.idMotorista = 3;

				resolve([aluno, TiposDeUsuario.ALUNO]);
			}else if(this.email == "fabioasilva94@gmail.com" && this.senha == "pokemon123"){
				
				let motorista: Motorista = new Motorista();

				//TODO: informação gravada no banco de dados, ao iniciar app
				motorista.idUsuario = 3;
				motorista.email = this.email;
				motorista.nome = "Fábio";
				motorista.nomeCompleto = "Fábio Alvarenga";
				motorista.telefone = "31989916997";
				motorista.idade = 29;
				motorista.idAlunos[0] = 0;
				motorista.idAlunos[1] = 2;
				motorista.idResponsavel = 2;

				resolve([motorista, TiposDeUsuario.MOTORISTA]);
			}else{
				this.alert("Erro!", "Usuário e/ou senha errados!");
			}
		  })
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
