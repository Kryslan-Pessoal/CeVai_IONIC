import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { EntrarComUsuarioESenhaPage } from './paginas/entrar-com-usuario-e-senha/entrar-com-usuario-e-senha.page';
import { StorageService } from './storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  tipoDeUsuario;
  //TODO: Puxar automático

  nomeDoUsuario;
  //TODO: Puxar automático

  constructor(
    private alertController : AlertController,
    private navController : NavController,
    private storageService: StorageService,
  ){

    // this.storageService.inicializarBanco();

    this.configuraUsuarioAtual();

  }


  configuraUsuarioAtual(){
    this.nomeDoUsuario = "Kryslan";
  }

  //#region Botões

  //LINA 2
  /** Para Motorista */
  aluno_click(){
    //TODO: vai para a tela de contato, mostrando o contato do aluno
  }
  /** Para Aluno e Responsável */
  motorista_click(){
    //TODO: vai para a tela de contato, mostrando o contato do motorista
  }

  //LINA 3
  /** Para Aluno */
  responsavel_click(){
    //TODO: vai para a tela de contato, mostrando o contato do responsável
  }
  /** Para Motorista */
  dependentes_click(){
    //TODO: vai para a tela de contato, mostrando os dependentes para o motorista
  }
  /** Para Responsável */
  dependente_click(){
    //TODO: vai para a tela de responsável, mostrando o dependente 
  }

  //LINHA 4
  /** Para Todos */
  configuracoes_click(){
    //TODO: vai para a tela de configurações
  }
  
  //LINHA 5
  /** Para Todos */
  public async sair_click(){
    const alertaSair = await this.alertController.create({
      header: 'Deseja Sair?',
      message: 'Você fará Logoff da sua conta!',
      buttons: [{
        text: 'Ficar',
      },
      {
        text: 'Sair',
        handler: () => {   
          this.fazerLogoff();
        }
      }]
    });
    alertaSair.present();
  }
  //#endregion Botões

  //#region click fazer Logoff
  
  async fazerLogoff(){
    //TODO: limpar os dados de sessão
    
    this.navController.navigateRoot(['login']);
  }
  //#endregion click fazer Logoff
}
