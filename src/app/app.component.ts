import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { EntrarComUsuarioESenhaPage } from './paginas/login/entrar-com-usuario-e-senha/entrar-com-usuario-e-senha.page';
import { StorageService } from './storage/storage.service';
import { TiposDeUsuario } from './utilitarios/Enum';
import Log from './utilitarios/Log';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  /** Monitora o tipo de usuário atual */
  tipoDeUsuarioAtual;
  /** Guarda o nome do usuário logado atualmente */
  nomeDoUsuario;

  /** Usada para desativar o while que atualiza a hora quando sair desta página em {@link defineHoraAtual()} */
  sePaginaAtiva: boolean = true;

  //Enums
  ALUNO = TiposDeUsuario.ALUNO;
  MOTORISTA = TiposDeUsuario.MOTORISTA;
  RESPONSAVEL = TiposDeUsuario.RESPONSAVEL;

  constructor(
    private alertController : AlertController,
    private navController : NavController,
    private storage: StorageService,
  ){

    // this.storageService.inicializarBanco();

    this.configuraUsuarioAtual();

  }

  async configuraUsuarioAtual(){
    this.sePaginaAtiva = true;
    while(this.sePaginaAtiva){
      this.storage.getUsuarioAtual().then(
        usuario => {
          this.nomeDoUsuario = usuario.nome;
        }
      );
      this.storage.getTipoDeUsuarioAtual().then(
        tipoDeUsuarioAtual => {
          this.tipoDeUsuarioAtual = tipoDeUsuarioAtual;
        }
      );
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  ionViewDidLeave(){
    this.sePaginaAtiva = false;
  }

  //#region Botões

  //LINA 2
  /** Para Aluno e Responsável */
  motorista_click(){
    this.navController.navigateForward(['contato']);
  }
  /** Para Motorista */
  alunos_click(){
    this.navController.navigateForward(['alunos']);
  }

  //LINA 3
  /** Para Aluno */
  responsavel_click(){
    this.navController.navigateForward(['contato']);
  }
  /** Para Responsável */
  dependente_click(){
    //TODO: vai para a tela de responsável, mostrando o dependente 
  }

  //LINHA 4
  /** Para Todos */
  configuracoes_click(){
    this.navController.navigateForward(['configuracoes']);
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
