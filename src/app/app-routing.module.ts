import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'entrar-com-usuario-e-senha',
    loadChildren: () => import('./paginas/entrar-com-usuario-e-senha/entrar-com-usuario-e-senha.module').then( m => m.EntrarComUsuarioESenhaPageModule)
  },
  {
    path: 'esqueceu-a-senha',
    loadChildren: () => import('./paginas/esqueceu-a-senha/esqueceu-a-senha.module').then( m => m.EsqueceuASenhaPageModule)
  },
  {
    path: 'itinerarios',
    loadChildren: () => import('./paginas/itinerarios/itinerarios.module').then( m => m.ItinerariosPageModule)
  },  {
    path: 'alunos',
    loadChildren: () => import('./paginas/alunos/alunos.module').then( m => m.AlunosPageModule)
  },
  {
    path: 'cadastro-de-itinerario',
    loadChildren: () => import('./paginas/cadastro-de-itinerario/cadastro-de-itinerario.module').then( m => m.CadastroDeItinerarioPageModule)
  },
  {
    path: 'rota',
    loadChildren: () => import('./paginas/rota/rota.module').then( m => m.RotaPageModule)
  },
  {
    path: 'check-in',
    loadChildren: () => import('./paginas/check-in/check-in.module').then( m => m.CheckInPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./paginas/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./paginas/contato/contato.module').then( m => m.ContatoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
