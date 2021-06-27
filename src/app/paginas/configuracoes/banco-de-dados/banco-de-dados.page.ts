import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { StorageService } from 'src/app/storage/storage.service';
import Log from 'src/app/utilitarios/Log';

@Component({
  selector: 'app-banco-de-dados',
  templateUrl: './banco-de-dados.page.html',
  styleUrls: ['./banco-de-dados.page.scss'],
})
export class BancoDeDadosPage implements OnInit {

  constructor(
    private storage: StorageService,
  ){
    this.configuraStatusBar();
  }
  ngOnInit() {}
  ngAfterViewInit() {
		setTimeout(() => {
			console.clear();
		}, 1000);
	}

  //GERAL
  resetarBanco(){
    this.storage.inicializarBanco();
  }
  limparConsole(){
    console.clear();
  }

  //USUÁRIOS
  inserirUsuarios(){
    this.storage.inserirUsuarios();
  }
  mostrarUsuarios(){
    this.storage.getAlunos().then(
      alunos => {
        Log.i("!!!!!!!!!!!!!!!!!!!!!!ALUNOS!!!!!!!!!!!!!!!!!!!!!!");
        Log.d("alunos[0]", Object.values(alunos[0]));
        Log.d("alunos[0]", Object.values(alunos[1]));
      },
      erro => {
        Log.i("erro ao carregar alunos do banco: " + erro);
      }
    );
    this.storage.getMotorista().then(
      motorista => {
        Log.i("!!!!!!!!!!!!!!!!!!!!!!MOTORISTA!!!!!!!!!!!!!!!!!!!!!!");
        Log.d("motorista", Object.values(motorista));
      },
      erro => {
        Log.i("erro ao carregar motorista do banco: " + erro);
      }
    );
    this.storage.getResponsavel().then(
      responsavel => {
        Log.i("!!!!!!!!!!!!!!!!!!!!!!RESPONSÁVEL!!!!!!!!!!!!!!!!!!!!!!");
        Log.d("responsavel", Object.values(responsavel));
      },
      erro => {
        Log.i("erro ao carregar responsavel do banco: " + erro);
      }
    );
  }

  //ITINERÁRIOS
  apagarItinerarios(){
    this.storage.setItinerarios(null);
  }
  resetarItinerarios(){
    this.storage.inserirItinerarios();
  }
  inserirPitagorasIda(){
    this.storage.inserirPitagorasIda();
  }
  inserirPitagorasVolta(){
    this.storage.inserirPitagorasVolta();
  }
  inserirUnicaIda(){
    this.storage.inserirUnicaIda();
  }
  inserirUnicaVolta(){
    this.storage.inserirUnicaVolta();
  }
  mostrarItinerarios(){
    this.storage.getItinerarios().then(
      itinerarios => {
        Log.i("!!!!!!!!!!!!!!!!!!!!!!ITINERÁRIOS!!!!!!!!!!!!!!!!!!!!!!");
        for(var i = 0; i < itinerarios.length; i++){
          Log.d("itinerarios[" + i + "]", Object.values(itinerarios[i]));
        }
      },
      erro => {
        Log.i("erro ao carregar os itinerários do banco: " + erro);
      }
    );
  }


  //UTILITÁRIOS
  configuraStatusBar(){
    StatusBar.setOverlaysWebView({ overlay: false });
    StatusBar.setBackgroundColor({ color:'#F57C00' });
  }
}
