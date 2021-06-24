import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login/login.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'entrar-com-usuario-e-senha',
    loadChildren: () => import('./paginas/login/entrar-com-usuario-e-senha/entrar-com-usuario-e-senha.module').then( m => m.EntrarComUsuarioESenhaPageModule)
  },
  {
    path: 'esqueceu-a-senha',
    loadChildren: () => import('./paginas/login/esqueceu-a-senha/esqueceu-a-senha.module').then( m => m.EsqueceuASenhaPageModule)
  },
  {
    path: 'itinerarios',
    loadChildren: () => import('./paginas/itinerarios/itinerarios/itinerarios.module').then( m => m.ItinerariosPageModule)
  },
  {
    path: 'alunos',
    loadChildren: () => import('./paginas/usuarios/alunos/alunos.module').then( m => m.AlunosPageModule)
  },
  {
    path: 'cadastro-de-itinerario',
    loadChildren: () => import('./paginas/itinerarios/cadastro-de-itinerario/cadastro-de-itinerario.module').then( m => m.CadastroDeItinerarioPageModule)
  },
  {
    path: 'rota',
    loadChildren: () => import('./paginas/itinerarios/rota/rota.module').then( m => m.RotaPageModule)
  },
  {
    path: 'check-in',
    loadChildren: () => import('./paginas/usuarios/check-in/check-in.module').then( m => m.CheckInPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./paginas/itinerarios/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./paginas/usuarios/contato/contato.module').then( m => m.ContatoPageModule)
  },
  //CONFIGURAÇÕES
  {
    path: 'configuracoes',
    loadChildren: () => import('./paginas/configuracoes/configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'configuracoes-conta',
    loadChildren: () => import('./paginas/configuracoes/configuracoes-conta/configuracoes-conta.module').then( m => m.ConfiguracoesContaPageModule)
  },
  {
    path: 'notificacoes',
    loadChildren: () => import('./paginas/configuracoes/notificacoes/notificacoes.module').then( m => m.NotificacoesPageModule)
  },
  {
    path: 'pagamentos',
    loadChildren: () => import('./paginas/configuracoes/pagamentos/pagamentos.module').then( m => m.PagamentosPageModule)
  },
  {
    path: 'endereco',
    loadChildren: () => import('./paginas/configuracoes/endereco-do-usuario/endereco.module').then( m => m.EnderecoPageModule)
  },  {
    path: 'minhas-fotos',
    loadChildren: () => import('./paginas/configuracoes/minhas-fotos/minhas-fotos.module').then( m => m.MinhasFotosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
