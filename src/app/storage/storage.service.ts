import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs';

import { Aluno, ListaDeAluno, Motorista, Responsavel } from '../entidades/Usuario';
import { TiposDeUsuario } from '../utilitarios/Enum';
import Log from '../utilitarios/Log';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  //#region Keys dos storages
  ALUNOS = "Alunos";
  MOTORISTA = "Motorista";
  RESPONSAVEL = "Responsavel";

  TIPO_DE_USUARIO_ATUAL = "tipoDeUsuárioAtual";

  DADOS_DO_USUARIO_ATUAL = "dadosDoUsuárioAtual";
  //#endregion Keys dos storages

  /** Monitora o tipo de usuário atual */
  usuarioAtual = TiposDeUsuario.ALUNO;

  constructor(
    private storage: Storage,
  ){}

  setTipoDeUsuarioAtual(tipoDeUsuario: string){
    return this.storage.set(this.TIPO_DE_USUARIO_ATUAL, tipoDeUsuario);
  }
  getTipoDeUsuarioAtual(){
    return this.storage.get(this.TIPO_DE_USUARIO_ATUAL);
  }

  setUsuarioAtual(usuarioAtual){
    return this.storage.set(this.DADOS_DO_USUARIO_ATUAL, usuarioAtual);
  }
  getUsuarioAtual(){
    return this.storage.get(this.DADOS_DO_USUARIO_ATUAL);
  }

  getAluno(): Promise<Aluno>{
    return this.storage.get(this.ALUNOS);
  }
  getResponsavel(): Promise<Responsavel>{
    return this.storage.get(this.RESPONSAVEL);
  }
  getMotorista(): Promise<Motorista>{
    return this.storage.get(this.MOTORISTA);
  }

  /** Configura Banco pela primeira vez ao abrir o App */
  inicializarBanco(){

    this.inserirUsuarios();

    Log.i("Banco inicializado e populado.");

  }
  //#region Configura Banco
  inserirUsuarios(){
    
    this.inserirAlunos();

    this.inserirMotorista();

    this.inserirResponsavel();

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
    return this.storage.set(this.ALUNOS, listaDeAluno.aluno);
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
    return this.storage.set(this.MOTORISTA, motorista);
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
    return this.storage.set(this.RESPONSAVEL, responsavel);
  }
  //#endregion Configura Banco
}
