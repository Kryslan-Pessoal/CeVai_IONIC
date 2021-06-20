import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  constructor(
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  fabAdicionarAluno_click(){
    this.presentToast("Função disponível apenas na versão Final.");
  }
  async presentToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }

}
