import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs';
import { Itinerario, SentidoDoItinerario } from '../entidades/Itinerario';
import { Local } from '../entidades/Local';

import { Aluno, ListaDeAluno, Motorista, Responsavel } from '../entidades/Usuario';
import { TiposDeUsuario } from '../utilitarios/Enum';
import Log from '../utilitarios/Log';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  //#region Keys
  ALUNOS_KEY = "Alunos";
  MOTORISTA_KEY = "Motorista";
  RESPONSAVEL_KEY = "Responsavel";

  TIPO_DE_USUARIO_ATUAL_KEY = "tipoDeUsuárioAtual";

  DADOS_DO_USUARIO_ATUAL_KEY = "dadosDoUsuárioAtual";

  ITINERARIOS_KEY = "Itinerários";
  //#endregion Keys

  //#region Globais
  /** Monitora o tipo de usuário atual */
  public usuarioAtual = TiposDeUsuario.ALUNO;
  //#endregion Globais

  //#region Start
  constructor(
    private storage: Storage,
  ){}
  /** Configura Banco pela primeira vez ao abrir o App */
  inicializarBanco(){
    this.inserirUsuarios();
    this.inserirItinerarios();
    Log.i("Banco inicializado e populado.");
  }
  //#endregion Start

  //#region Usuário
  /** Utilize o {@link Enum.TiposDeUsuario} */
  setTipoDeUsuarioAtual(tipoDeUsuario: string){
    this.usuarioAtual = tipoDeUsuario;
    return this.storage.set(this.TIPO_DE_USUARIO_ATUAL_KEY, tipoDeUsuario);
  }
  /** Retorna como {@link Enum.TiposDeUsuario}
  *  TiposDeUsuario.ALUNO
  *  TiposDeUsuario.MOTORISTA
  *  TiposDeUsuario.RESPONSAVEL */
  getTipoDeUsuarioAtual(){
    return this.storage.get(this.TIPO_DE_USUARIO_ATUAL_KEY);
  }

  setUsuarioAtual(usuarioAtual){
    return this.storage.set(this.DADOS_DO_USUARIO_ATUAL_KEY, usuarioAtual);
  }
  getUsuarioAtual(){
    return this.storage.get(this.DADOS_DO_USUARIO_ATUAL_KEY);
  }

  getAlunos(): Promise<Aluno>{
    return this.storage.get(this.ALUNOS_KEY);
  }
  getResponsavel(): Promise<Responsavel>{
    return this.storage.get(this.RESPONSAVEL_KEY);
  }
  getMotorista(): Promise<Motorista>{
    return this.storage.get(this.MOTORISTA_KEY);
  }
  //#endregion Usuário

  //#region Itinerarios
  /** Adiciona um Itinerário a lista de Itinerários */
  setItinerario(itinerario: Itinerario){
    return new Promise((resolve, reject) => {
      this.getItinerarios().then(
        itinerariosJaCadastrados => {
          try{
            itinerariosJaCadastrados.push(itinerario);
            this.setItinerarios(itinerariosJaCadastrados).then(
              result => {
                resolve(result);
              }, 
              erro => {
                Log.i("Erro no banco 1: " + erro);
                reject(erro);
              }
            );
          }catch(e){
            Log.i("Erro 2: " + e);
            let itinerarios = new Array<Itinerario>();
            itinerarios.push(itinerario);
            this.setItinerarios(itinerarios).then(() => {}, erro => {
              Log.i("Erro no banco 3: " + erro);
              reject(erro);
            });
          }
        },
        erro => {  //Caso não tenha nenhum itinerário cadastrado
          Log.i("Erro no banco 3: " + erro);
        }
      );
    });
  }
  /** Seta Todos os Itinerários */
  setItinerarios(itinerario: Itinerario[]){
    Log.i("Itinerários REDEFINIDOS!")
    return this.storage.set(this.ITINERARIOS_KEY, itinerario);
  }
  /** Pega Todos os Itinerários */
  getItinerarios(){
    return this.storage.get(this.ITINERARIOS_KEY);
  }
  //#endregion Itinerarios

  
  //#region Configura Banco
  inserirUsuarios(){
    this.inserirAlunos();
    this.inserirMotorista();
    this.inserirResponsavel();
    Log.i("USUÁRIOS INSERIDOS");
  }
  inserirAlunos(){
    let listaDeAluno: ListaDeAluno = new ListaDeAluno();

    //Cria Kryslan
    let aluno1: Aluno = new Aluno();
    aluno1.idUsuario = 0;
    aluno1.email = "kryslan2680@gmail.com";
    aluno1.nome = "Kryslan";
    aluno1.nomeCompleto = "Kryslan Gomes";
    aluno1.telefone = "31982665474";
    aluno1.idade = 24;
    aluno1.idResonsavel = 1;
    aluno1.idMotorista = 3;

    //Cria Gabriel
    let aluno2: Aluno = new Aluno();
    aluno2.idUsuario = 1;
    aluno2.email = "gabriel244468@gmail.com";
    aluno2.nome = "Gabriel";
    aluno2.nomeCompleto = "Gabriel Tsuyoshi Shibuya";
    aluno2.telefone = "119983513805";
    aluno2.idade = 29;
    aluno2.idResonsavel = 1;
    aluno2.idMotorista = 3;

    listaDeAluno.aluno.push(aluno1);
    listaDeAluno.aluno.push(aluno2);
    // Log.i("Alunos Criados");
    return this.storage.set(this.ALUNOS_KEY, listaDeAluno.aluno);
  }
  inserirMotorista(){
    let motorista: Motorista = new Motorista();
    motorista.idUsuario = 2;
    motorista.email = "fabioasilva94@gmail.com";
    motorista.nome = "Fábio";
    motorista.nomeCompleto = "Fábio Alvarenga";
    motorista.telefone = "31989916997";
    motorista.idade = 29;
    motorista.idAlunos.push(0);
    motorista.idAlunos.push(1);
    motorista.idResponsavel = 3;
    // Log.i("Motorista Criado");
    return this.storage.set(this.MOTORISTA_KEY, motorista);
  }
  inserirResponsavel(){
    let responsavel: Responsavel = new Responsavel();
    responsavel.idUsuario = 3;
    responsavel.email = "sjs13990@gmail.com";
    responsavel.nome = "Sara";
    responsavel.nomeCompleto = "Sara de Jesus Santos";
    responsavel.telefone = "31995319857";
    responsavel.idade = 20;
    responsavel.idAluno = 0;
    responsavel.idMotorista = 1;
    // Log.i("Responsável Criado");
    return this.storage.set(this.RESPONSAVEL_KEY, responsavel);
  }

  async inserirItinerarios(){
    await this.inserirUnicaIda();
    await this.inserirUnicaVolta();
    await this.inserirPitagorasIda();
    await this.inserirPitagorasVolta();
    Log.i("ITINERÁRIOS INSERIDOS");
  }
  //#region Locais
  unica = new Local(
    "Faculdade Única",
    "latitude",  //TODO: definir latitude e longitude!
    "longitude"
  );
  pitagoras = new Local(
    "Faculdade Única",
    "latitude",  //TODO: definir latitude e longitude!
    "longitude"
  );
  kryslan = new Local(
    "Kryslan",
    "latitude",  //TODO: definir latitude e longitude!
    "longitude"
  );
  gabriel = new Local(
    "Gabriel",
    "latitude",  //TODO: definir latitude e longitude!
    "longitude"
  );
  //#endregion Locais
  inserirPitagorasIda(){
    let itinerario = new Itinerario();
    itinerario.nomeDoItinerario = "Manhã Pitágoras";
    itinerario.sentido = SentidoDoItinerario.IDA;
    itinerario.faculdadeDestino = this.pitagoras;
    itinerario.parada1 = this.kryslan;
    itinerario.parada2 = this.gabriel;
    itinerario.horaDeSaida = "08:00";

    this.setItinerario(itinerario);
  }
  inserirPitagorasVolta(){
    let itinerario: Itinerario = new Itinerario();
    itinerario.nomeDoItinerario = "Manhã Pitágoras";
    itinerario.sentido = SentidoDoItinerario.VOLTA;
    itinerario.faculdadeDestino = this.pitagoras;
    itinerario.parada1 = this.kryslan;
    itinerario.parada2 = this.gabriel;
    itinerario.horaDeSaida = "08:00";

    this.setItinerario(itinerario);
  }
  inserirUnicaIda(){
    let itinerario: Itinerario = new Itinerario();
    itinerario.nomeDoItinerario = "Noite Única";
    itinerario.sentido = SentidoDoItinerario.IDA;
    itinerario.faculdadeDestino = this.unica;
    itinerario.parada1 = this.kryslan;
    itinerario.horaDeSaida = "18:00";

    this.setItinerario(itinerario);
  }
  inserirUnicaVolta(){
    let itinerario: Itinerario = new Itinerario();
    itinerario.nomeDoItinerario = "Noite Única";
    itinerario.sentido = SentidoDoItinerario.VOLTA;
    itinerario.faculdadeDestino = this.unica;
    itinerario.parada1 = this.kryslan;
    itinerario.horaDeSaida = "22:00";

    this.setItinerario(itinerario);
  }
  //#endregion Configura Banco
}
