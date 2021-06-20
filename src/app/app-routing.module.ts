import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'entrar-com-usuario-e-senha',
    loadChildren: () => import('./paginas/entrar-com-usuario-e-senha/entrar-com-usuario-e-senha.module').then( m => m.EntrarComUsuarioESenhaPageModule)
  },
  {
    path: 'esqueceu-a-senha',
    loadChildren: () => import('./paginas/esqueceu-a-senha/esqueceu-a-senha.module').then( m => m.EsqueceuASenhaPageModule)
  },  {
    path: 'configuracoes',
    loadChildren: () => import('./paginas/configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'configuracoes-conta',
    loadChildren: () => import('./paginas/configuracoes-conta/configuracoes-conta.module').then( m => m.ConfiguracoesContaPageModule)
  },
  {
    path: 'endereco',
    loadChildren: () => import('./paginas/endereco/endereco.module').then( m => m.EnderecoPageModule)
  },
  {
    path: 'pagamentos',
    loadChildren: () => import('./paginas/pagamentos/pagamentos.module').then( m => m.PagamentosPageModule)
  },
  {
    path: 'notificacoes',
    loadChildren: () => import('./paginas/notificacoes/notificacoes.module').then( m => m.NotificacoesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
