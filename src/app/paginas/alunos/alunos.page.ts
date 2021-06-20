import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  constructor(
    private toastController: ToastController,
    private menu: MenuController,
  ) { }

  ngOnInit() {
    this.menu.enable(false);
  }
  ionViewDidLeave() {
    this.menu.enable(true);
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
